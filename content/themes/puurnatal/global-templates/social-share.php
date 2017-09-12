<div class="social-share">
    <h3><?php _e('Share?', 'wbase'); ?></h3>
    <ul class="share-block">
        <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank" data-toggle="tooltip" title="<?php _e('Share', 'wbase'); ?> <?php the_title(); ?> via Facebook"><i class="fa fa-facebook"></i></a></li>
        <li><a href="http://twitter.com/home?status=<?php the_title(); ?> <?php the_permalink(); ?>" target="_blank" data-toggle="tooltip" title="<?php _e('Share', 'wbase'); ?> <?php the_title(); ?> via Twitter"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://plus.google.com/share?url=<?php the_permalink(); ?>" target="_blank" data-toggle="tooltip" title="<?php _e('Share', 'wbase'); ?> <?php the_title(); ?> via Google+"><i class="fa fa-google-plus"></i> </a></li>
        <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>&amp;summary=<?php the_excerpt(); ?>" target="_blank" data-toggle="tooltip" title="<?php _e('Share', 'wbase'); ?> <?php the_title(); ?> via LinkedIn"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="mailto:?subject=<?php _e('Take a look at this!', 'wbase'); ?>: <?php the_title(); ?>&amp;body=<?php the_permalink(); ?>" data-toggle="tooltip" title="<?php _e('Share', 'wbase'); ?> <?php the_title(); ?> via email"><i class="fa fa-envelope-o"></i></a></li>
    </ul>
</div>