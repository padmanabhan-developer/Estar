<?php

/* modules/inv_flickr/templates/flickr.html.twig */
class __TwigTemplate_7cb05bead7c680f0faa7541609b8bce6d0ee24e2d39648993cabd75c9b43670a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 16
        echo "<div class=\"innovation-flickr\">
  <script type=\"text/javascript\" src=\"http://www.flickr.com/badge_code_v2.gne?count=";
        // line 17
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["flickr_num_photo"]) ? $context["flickr_num_photo"] : null), "html", null, true));
        echo "&amp;display=";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["flickr_display"]) ? $context["flickr_display"] : null), "html", null, true));
        echo "&amp;size=";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["flickr_image_size"]) ? $context["flickr_image_size"] : null), "html", null, true));
        echo "&amp;layout=";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["flickr_layout"]) ? $context["flickr_layout"] : null), "html", null, true));
        echo "&amp;source=";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["flickr_source"]) ? $context["flickr_source"] : null), "html", null, true));
        echo "&amp;";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["flickr_id"]) ? $context["flickr_id"] : null), "html", null, true));
        echo "\"></script>
</div>";
    }

    public function getTemplateName()
    {
        return "modules/inv_flickr/templates/flickr.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  46 => 17,  43 => 16,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation for the basic structure of a inv_flickr.*/
/*  **/
/*  * Available variables:*/
/*  * - flickr_source: Source pulling photo*/
/*  * - flickr_id: Flickr ID.*/
/*  * - flickr_num_photo: Number of photo to get.*/
/*  * - flickr_display: Order Images can be latest or random*/
/*  * - flickr_image_size: Size of images*/
/*  * - flickr_layout*/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* <div class="innovation-flickr">*/
/*   <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count={{ flickr_num_photo }}&amp;display={{ flickr_display }}&amp;size={{ flickr_image_size }}&amp;layout={{ flickr_layout }}&amp;source={{ flickr_source }}&amp;{{ flickr_id }}"></script>*/
/* </div>*/
