<?php
/**
 * Add WooCommerce support
 *
 * @package wbase
 */

if ( ! function_exists( 'wbase_woocommerce_support' ) ) :
	/**
	 * Declares WooCommerce theme support.
	 */
	function wbase_woocommerce_support() {
		add_theme_support( 'woocommerce' );
		// hook in and customizer form fields.
		//add_filter( 'woocommerce_form_field_args', 'wbase_woocommerce_form_field_args', 10, 3 );
	}
endif;
add_action( 'after_setup_theme', 'wbase_woocommerce_support' );

/**
 * Filter hook function monkey patching form classes
 * Author: Adriano Monecchi http://stackoverflow.com/a/36724593/307826
 *
 * @param string $args Form attributes.
 * @param string $key Not in use.
 * @param null   $value Not in use.
 *
 * @return mixed
 */
function wbase_woocommerce_form_field_args( $args, $key, $value = null ) {
	// Start field type switch case.
	switch ( $args['type'] ) :
		/* Targets all select input type elements, except the country and state select input types */
		case 'select' :
			// Add a class to the field's html element wrapper - woocommerce
			// input types (fields) are often wrapped within a <p></p> tag.
			$args['class'][] = 'form-group';
			// Add a class to the form input itself.
			$args['input_class']       = array( 'form-control', 'input-lg' );
			$args['label_class']       = array( 'control-label' );
			$args['custom_attributes'] = array(
				'data-plugin'      => 'select2',
				'data-allow-clear' => 'true',
				'aria-hidden'      => 'true',
				// Add custom data attributes to the form input itself.
			);
			break;
		// By default WooCommerce will populate a select with the country names - $args
		// defined for this specific input type targets only the country select element.
		case 'country' :
			$args['class'][]     = 'form-group single-country';
			$args['label_class'] = array( 'control-label' );
			break;
		// By default WooCommerce will populate a select with state names - $args defined
		// for this specific input type targets only the country select element.
		case 'state' :
			// Add class to the field's html element wrapper.
			$args['class'][] = 'form-group';
			// add class to the form input itself.
			$args['input_class']       = array( '', 'input-lg' );
			$args['label_class']       = array( 'control-label' );
			$args['custom_attributes'] = array(
				'data-plugin'      => 'select2',
				'data-allow-clear' => 'true',
				'aria-hidden'      => 'true',
			);
			break;
		case 'password' :
		case 'text' :
		case 'email' :
		case 'tel' :
		case 'number' :
			$args['class'][]     = 'form-group';
			$args['input_class'] = array( 'form-control', 'input-lg' );
			$args['label_class'] = array( 'control-label' );
			break;
		case 'textarea' :
			$args['input_class'] = array( 'form-control', 'input-lg' );
			$args['label_class'] = array( 'control-label' );
			break;
		case 'checkbox' :
			$args['label_class'] = array( 'custom-control custom-checkbox' );
			$args['input_class'] = array( 'custom-control-input', 'input-lg' );
			break;
		case 'radio' :
			$args['label_class'] = array( 'custom-control custom-radio' );
			$args['input_class'] = array( 'custom-control-input', 'input-lg' );
			break;
		default :
			$args['class'][]     = 'form-group';
			$args['input_class'] = array( 'form-control', 'input-lg' );
			$args['label_class'] = array( 'control-label' );
			break;
	endswitch;
	return $args;
}


/**
 * Custom Fields
 *
 */
add_action( 'woocommerce_product_options_general_product_data', 'wbase_woocommerce_add_custom_fields' );
add_action( 'woocommerce_process_product_meta', 'wbase_woocommerce_save_custom_fields' );
add_action( 'woocommerce_product_after_variable_attributes', 'wbase_variation_settings_fields', 10, 3 );
add_action( 'woocommerce_save_product_variation', 'wbase_save_variation_settings_fields', 10, 2 );
add_filter( 'woocommerce_available_variation', 'wbase_load_variation_settings_fields' );
add_filter('woocommerce_cart_shipping_method_full_label', 'wbase_add_free_label', 10, 2);

// Add Delivery field
function wbase_woocommerce_add_custom_fields() {
	woocommerce_wp_text_input( array(
		'id' 			=> '_delivery_field',
		'label' 		=> __( 'Delivery', 'wbase' ),
		'description' 	=> __( 'Enter the delivery time in days.', 'wbase' ),
		'desc_tip' 		=> 'true'
	) );
}

// Save Delivery field
function wbase_woocommerce_save_custom_fields( $post_id ) {
	update_post_meta( $post_id, '_delivery_field', esc_attr( $_POST['_delivery_field'] ) );
}

// Add max width and length fields
function wbase_variation_settings_fields( $loop, $variation_data, $variation ) {
	// Max. length
	woocommerce_wp_text_input( 
		array( 
			'id'          		=> '_max_length[' . $variation->ID . ']', 
			'label'       		=> __( 'Max. length', 'wbbase' ), 
			'desc_tip'    		=> 'true',
			'description' 		=> __( 'Enter the maximum length here.', 'wbbase' ),
			'value'       		=> get_post_meta( $variation->ID, '_max_length', true ),
			'custom_attributes' => array(
							'step' 	=> 'any',
							'min'	=> '0'
						) 
		)
	);
	// Max. width
	woocommerce_wp_text_input( 
		array( 
			'id'          		=> '_max_width[' . $variation->ID . ']', 
			'label'       		=> __( 'Max. width', 'wbbase' ), 
			'desc_tip'    		=> 'true',
			'description' 		=> __( 'Enter the maximum width here.', 'wbbase' ),
			'value'       		=> get_post_meta( $variation->ID, '_max_width', true ),
			'custom_attributes' => array(
							'step' 	=> 'any',
							'min'	=> '0'
						) 
		)
	);
}

// Save max width and length fields
function wbase_save_variation_settings_fields( $post_id ) {
	// Max. length
	$max_length = $_POST['_max_length'][ $post_id ];
	if( ! empty( $max_length ) ) :
		update_post_meta( $post_id, '_max_length', esc_attr( $max_length ) );
	endif;
	// Max. width
	$max_width = $_POST['_max_width'][ $post_id ];
	if( ! empty( $max_width ) ) :
		update_post_meta( $post_id, '_max_width', esc_attr( $max_width ) );
	endif;
}

// Add New Variation Settings
function wbase_load_variation_settings_fields( $variations ) {
	// duplicate the line for each field
	$variations['max_length'] = get_post_meta( $variations[ 'variation_id' ], '_max_length', true );
	$variations['max_width'] = get_post_meta( $variations[ 'variation_id' ], '_max_width', true );

	return $variations;
}

//Add Free when shipping = 0
function wbase_add_free_label($label, $method) {
	if ($method->cost == 0) :
		$label .= __( 'Free', 'wbbase' );
	endif;
	return $label;
}



// Only for: Enhanced E-commerce for Woocommerce store
if ( is_plugin_active( 'enhanced-e-commerce-for-woocommerce-store/woocommerce-enhanced-ecommerce-google-analytics-integration.php' ) ) :
	/**
	 * Enhanced E-commerce for Woocommerce store
	 * De id moet _wpmr hebben anders pakt de plugin het niet op.
	 * Er zijn nog enkele die ook werken maar _wpmr werkt voor custom post fields.
	 *
	 * @return mixed
	 */
	if ( ! function_exists( 'wbase_add_wpmr_ga_price' ) ) :
		function wbase_add_wpmr_ga_price() {
			global $woocommerce, $post;

			echo '<div class="options_group">';
				woocommerce_wp_text_input(
					array(
						'id'            => '_wpmr_ga_price',
						'label'         => __( 'GA Price', 'wbbase' ),
						'placeholder'   => '',
						'description'   => __( 'Enter the custom GA Price here.', 'wbbase' ),
						'type'          => 'number',
						'desc_tip'      => 'true',
						'custom_attributes' => array(
								'step' 	=> 'any',
								'min'	=> '0'
							)
					)
				);
			echo '</div>';
		}
	endif;
	add_action( 'woocommerce_product_options_general_product_data', 'wbase_add_wpmr_ga_price' );

	// Save WPMR GA_Price Field
	if ( ! function_exists( 'wbase_save_wpmr_ga_price' ) ) :
		function wbase_save_wpmr_ga_price( $post_id ) {
			$woocommerce_number_field = $_POST['_wpmr_ga_price'];
			if( !empty( $woocommerce_number_field ) ) :
				update_post_meta( $post_id, '_wpmr_ga_price', esc_attr( $woocommerce_number_field ) );
			endif;
		}
	endif;
	add_action( 'woocommerce_process_product_meta', 'wbase_save_wpmr_ga_price' );
endif;


// Only for: Measurement Price Calculator Plugin (PVC Shops)
if ( is_plugin_active( 'measurementpricecalc351/woocommerce-measurement-price-calculator.php' ) ) :
	//add_filter( 'wc_measurement_price_calculator_no_price_available_notice_text', 'wbase_woocommerce_change_mpc_price_notice' );
	//add_action( 'woocommerce_single_product_summary', 'wbase_woocommerce_total_product_price', 31 );
	//add_action( 'yith_wcqv_product_summary', 'wbase_woocommerce_total_product_price', 31 );
	//add_action( 'woocommerce_before_add_to_cart_button', 'wbase_woocommerce_add_cutting_costs_field' );
	//add_filter( 'woocommerce_add_cart_item_data', 'wbase_woocommerce_save_cutting_fee', 99, 2 );
	//add_action( 'woocommerce_before_calculate_totals', 'wbase_woocommerce_calculate_cutting_fee', 99 );
	//add_filter( 'woocommerce_get_item_data', 'wbase_woocommerce_render_meta_on_cart_and_checkout', 99, 2 );

	// Change message for unavailable measurement
	function wbase_woocommerce_change_mpc_price_notice( $message ) {
    	$message = __('The slected measurement is not available for this product, Please contact the store for assistance.','wbase');
    	return $message;
	}

	// Calculation productprice frontend    
	function wbase_woocommerce_total_product_price() {
    	global $woocommerce, $product, $post;
    	$customprodid = 67;

    	if ($post->ID == $customprodid) :
        	$cutcosts = get_option('wlc_cutting_costs');
        	if (!isset($cutcosts) && empty($cutcosts)) :
            	$cutcosts = 7.5;
        	endif;

        	echo sprintf('<div id="product_total_price">%s %s</div>',__('Total Price:','wbase'),'<span class="price">'.get_woocommerce_currency_symbol().'0,00</span>');
        	__('Select options','wbase');
        	?>
            <script>
                jQuery(function($){
                    $railsprice = <?php echo $cutcosts; ?>;

                    $('#rails_price').show();
                    $('#product_total_price').show();

                    jQuery(document.body).on('change',"#pa_dikte",function (e) {
                        calculateCuttingprice();
                    });

                    $("#width_needed").keypress(function(e) {
                        if(isNaN(this.value+""+String.fromCharCode(e.charCode))) return false;
                    })
                    .on("cut copy paste",function(e){
                        e.preventDefault();
                    });

                    $("#length_needed").keypress(function(e) {
                        if(isNaN(this.value+""+String.fromCharCode(e.charCode))) return false;
                    })
                    .on("cut copy paste",function(e){
                        e.preventDefault();
                    });

                    $("#width_needed").keyup(function() {
                        calculateCuttingprice();
                    });

                    $("#length_needed").keyup(function() {
                        calculateCuttingprice();
                    });

                    function roundvalue(value) {
                        var substr = value.toFixed(3).toString().split('.');
                        if((substr[1]/100) == 0 ) {                          
                            return parseFloat(value);
                        } else if((substr[1]/1000) < 0.500 ) {
                            return parseFloat(substr[0]) + parseFloat(0.5);
                        } else if((substr[1]/1000) == 0.50 ) {
                            return parseFloat(value);
                        } else {
                            return Math.ceil(value);
                        }
                    }

                    function calculateCuttingprice() {
                        $currency = '<?php echo get_woocommerce_currency_symbol(); ?>';
                        $add_costs = 7.50;

                        $newprice = parseFloat($('.product_price .amount').text().replace(/[^\d,]/g, '').replace(',','.'));
                        $add_costs = parseFloat($railsprice);
                        $newprice = parseFloat($newprice) + parseFloat($add_costs);
                        if($newprice > 0) {
                            $newprice = parseFloat($newprice, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\,)/g, "$1,").toString();
                        } else {
                            $newprice = parseFloat(0, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\,)/g, "$1,").toString();
                        }

                        if($("#additionalprice").length) {
                            $('#additionalprice').remove();
                            $('#price_calculator').append('<input type="hidden" id="additionalprice" name="additionalprice" value=' + $add_costs + ' />');
                        } else {                               
                            $('#price_calculator').append('<input type="hidden" id="additionalprice" name="additionalprice" value=' + $add_costs + ' />');
                        }

                        $('#product_total_price .price').html( $currency + $newprice.replace(".", ","));
                    }

                });
        	</script>
        	<script>
            	jQuery(function ($) {
                	jQuery( "form" ).submit(function( event ) {
						$max_length = jQuery('#max_length').text();
						$max_width = jQuery('#max_width').text();
													
						$entered_length = jQuery('#length_needed').val();
						$entered_width = jQuery('#width_needed').val();

						if(parseInt($entered_length) > parseInt(jQuery.trim($max_length))) {
							jQuery('#length_needed').addClass('has-error');
							if (!jQuery( "ul.woocommerce-error" ).length ) {
								jQuery( "div.product-essential" ).prepend( '<ul class="woocommerce-error"><li id="length">Lengte kan niet meer zijn dan ' + $max_length + 'cm</li></ul>' );
							} else {
								if (!jQuery( "ul.woocommerce-error li#length" ).length ) {
									jQuery( ".woocommerce-error" ).append( '<li>Lengte kan niet meer zijn dan ' + $max_length + 'cm</li>' );
								}
							}
							event.preventDefault();
						}

						if(parseInt($entered_width) > parseInt(jQuery.trim($max_width))) {
							jQuery('#width_needed').addClass('has-error');
							if (!jQuery( "ul.woocommerce-error" ).length ) {
								jQuery( "div.product-essential" ).prepend( '<ul class="woocommerce-error"><li id="width">Breedte kan niet meer zijn dan ' + $max_width + 'cm</li></ul>' );
							} else {
								if (!jQuery( "ul.woocommerce-error li#width" ).length ) {
									jQuery( ".woocommerce-error" ).append( '<li id="width">Breedte kan niet meer zijn dan ' + $max_width + 'cm</li>' );
								}
							}
							event.preventDefault();
						}
					});

				});
			</script>
    	<?php
    	else :
    	?>
        	<script>
            	jQuery(function($){
	                $("#length_needed").keypress(function(e) {
                    	if(isNaN(this.value+""+String.fromCharCode(e.charCode))) return false;
                	})
                	.on("cut copy paste",function(e){
                    	e.preventDefault();
                	});
            	});
        	</script>
    	<?php
    	endif;
	}

	// add a check box field in your woocommerce product page
	function wbase_woocommerce_add_cutting_costs_field() {
    	global $post;
    	$customprodid = 67;

		if ($post->ID == $customprodid) :
			$cuttingprice = get_option('wlc_cutting_costs');
			if (!isset($cuttingprice) && empty($cuttingprice)) :
				$cuttingprice = 7.50;
			endif;
			echo '<table class="variations" cellspacing="0">
					<tbody>
						<tr>
							<td class="label">
								<label>'. __('Cutting Costs','wbase') .'</label>
							</td>
							<td class="value">
								'. woocommerce_price($cuttingprice) .'
								<input type="hidden" name="option_cutting" value="YES" />
							</td>
						</tr>
					</tbody>
				</table>';
		endif;
	}

	// Store the 'Rails' option in the line item object 
	function wbase_woocommerce_save_cutting_fee( $cart_item_data, $product_id ) {
    	session_start();
    	if ( isset( $_POST['option_cutting'] ) && $_POST['option_cutting'] === 'YES' ) :
        	$cart_item_data[ "cutting_fee" ] = "YES";
        	$cart_item_data[ "cutting_fee_value" ] = $_POST['additionalprice'];
    	endif;
    	return $cart_item_data;
	}

	// Add Rails fee if customer has chosen to
	function wbase_woocommerce_calculate_cutting_fee( $cart_object ) {  
    	if ( !WC()->session->__isset( "reload_checkout" )) :
        	foreach ( $cart_object->cart_contents as $key => $value ) :
            	if ( isset( $value["cutting_fee"] ) ) :
                	$orgPrice = floatval( $value['data']->price );
                	$value['data']->price = ( $orgPrice + ($value[ "cutting_fee_value" ]) );
            	endif;
        	endforeach;
    	endif;
	}

	// Add Rails option in cart table and checkout order review table
	function wbase_woocommerce_render_meta_on_cart_and_checkout( $cart_data, $cart_item = null ) {
    	$meta_items = array();
    	/* Woo 2.4.2 updates */
    	if ( !empty( $cart_data ) ) :
        	$meta_items = $cart_data;
    	endif;
    	if ( isset( $cart_item["cutting_fee"] ) ) :
        	$meta_items[] = array( "name" => __('Cutting Costs', 'wbase'), "value" => __('Yes', 'wbase') );
    	endif;
    	return $meta_items;
	}
endif;


// Only for: Table Rate Shipping Plugin
if ( is_plugin_active( 'table-rate-shipping-for-woocommerce/mh-wc-table-rate.php' ) ) :
	add_filter( 'woocommerce_cart_shipping_method_full_label', 'wbase_woocommerce_remove_shipping_label', 10, 2 );
	add_filter( 'wpo_wcpdf_woocommerce_totals', 'wbase_woocommerce_totals', 10, 2 );

	// Remove Title Table Rate Shipping
	function wbase_woocommerce_remove_shipping_label($full_label, $method) {
    	$full_label = str_replace("Staffel: ","",$full_label);
    	$full_label = str_replace("Staffel","",$full_label);
    	return $full_label;
	}

	// Remove the "via" text in shipping method
	function wbase_woocommerce_totals ( $totals, $order ) {
    	if (!isset($totals['shipping'])) :
        	return $totals;
    	endif;

    	$totals['shipping']['value'] =  substr($totals['shipping']['value'], 0, strpos( $totals['shipping']['value'], '<small'));
    	return $totals;
	}
endif;