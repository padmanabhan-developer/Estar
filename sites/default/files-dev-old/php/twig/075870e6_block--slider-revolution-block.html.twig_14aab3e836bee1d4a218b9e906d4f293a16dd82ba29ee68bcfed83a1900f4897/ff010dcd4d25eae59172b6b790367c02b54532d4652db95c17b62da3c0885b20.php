<?php

/* themes/enar/templates/block--slider-revolution-block.html.twig */
class __TwigTemplate_170112172b0a3f0992b1da96a2d1179e1799405f651ea1d2a03af2c2d17528a6 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 32, "block" => 44);
        $filters = array("raw" => 36);
        $functions = array("attach_library" => 30);

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'block'),
                array('raw'),
                array('attach_library')
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

        // line 30
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->env->getExtension('drupal_core')->attachLibrary("enar/revolution-slider"), "html", null, true));
        echo "
<div";
        // line 31
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => "block revolution-slider-block"), "method"), "html", null, true));
        echo ">
  ";
        // line 32
        if (array_key_exists("overlay_style", $context)) {
            // line 33
            echo "  <div style=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["overlay_style"]) ? $context["overlay_style"] : null), "html", null, true));
            echo "\" class=\"block-overlay-inner\"></div>
  ";
        }
        // line 35
        echo "    ";
        if (array_key_exists("video_bg", $context)) {
            // line 36
            echo "      ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["video_bg"]) ? $context["video_bg"] : null)));
            echo "
    ";
        }
        // line 38
        echo "    ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
    ";
        // line 39
        if ((isset($context["label"]) ? $context["label"] : null)) {
            // line 40
            echo "      <h2";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["title_attributes"]) ? $context["title_attributes"] : null), "addClass", array(0 => "block-title"), "method"), "html", null, true));
            echo ">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</h2>
    ";
        }
        // line 42
        echo "    ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "
  <div";
        // line 43
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content_attributes"]) ? $context["content_attributes"] : null), "html", null, true));
        echo ">
    ";
        // line 44
        $this->displayBlock('content', $context, $blocks);
        // line 47
        echo "  </div>
</div>

";
    }

    // line 44
    public function block_content($context, array $blocks = array())
    {
        // line 45
        echo "      ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
    ";
    }

    public function getTemplateName()
    {
        return "themes/enar/templates/block--slider-revolution-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 45,  102 => 44,  95 => 47,  93 => 44,  89 => 43,  84 => 42,  76 => 40,  74 => 39,  69 => 38,  63 => 36,  60 => 35,  54 => 33,  52 => 32,  48 => 31,  44 => 30,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display a block.*/
/*  **/
/*  * Available variables:*/
/*  * - plugin_id: The ID of the block implementation.*/
/*  * - label: The configured label of the block if visible.*/
/*  * - configuration: A list of the block's configuration values.*/
/*  *   - label: The configured label for the block.*/
/*  *   - label_display: The display settings for the label.*/
/*  *   - provider: The module or other provider that provided this block plugin.*/
/*  *   - Block plugin specific settings will also be stored here.*/
/*  * - content: The content of this block.*/
/*  * - attributes: array of HTML attributes populated by modules, intended to*/
/*  *   be added to the main container tag of this template.*/
/*  *   - id: A valid HTML ID and guaranteed unique.*/
/*  * - title_attributes: Same as attributes, except applied to the main title*/
/*  *   tag that appears in the template.*/
/*  * - title_prefix: Additional output populated by modules, intended to be*/
/*  *   displayed in front of the main title tag that appears in the template.*/
/*  * - title_suffix: Additional output populated by modules, intended to be*/
/*  *   displayed after the main title tag that appears in the template.*/
/*  **/
/*  * @see template_preprocess_block()*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* {{ attach_library('enar/revolution-slider') }}*/
/* <div{{ attributes.addClass('block revolution-slider-block') }}>*/
/*   {% if overlay_style is defined %}*/
/*   <div style="{{ overlay_style }}" class="block-overlay-inner"></div>*/
/*   {% endif %}*/
/*     {% if video_bg is defined %}*/
/*       {{ video_bg | raw }}*/
/*     {% endif %}*/
/*     {{ title_prefix }}*/
/*     {% if label %}*/
/*       <h2{{ title_attributes.addClass('block-title') }}>{{ label }}</h2>*/
/*     {% endif %}*/
/*     {{ title_suffix }}*/
/*   <div{{ content_attributes }}>*/
/*     {% block content %}*/
/*       {{ content }}*/
/*     {% endblock %}*/
/*   </div>*/
/* </div>*/
/* */
/* */
