<?php

/* modules/inv_shortcodes/templates/title.html.twig */
class __TwigTemplate_5632299b34f78a99dd64c603f158b19a0b2fc69d5aa8cf6880e0e289148099c5 extends Twig_Template
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
        $tags = array("if" => 2);
        $filters = array("raw" => 3);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array('raw'),
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

        // line 1
        echo "<div class=\"title-wrapper ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true));
        echo "\">
    ";
        // line 2
        if ( !twig_test_empty((isset($context["sub_title"]) ? $context["sub_title"] : null))) {
            // line 3
            echo "        <h3 class=\"title\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["main_title"]) ? $context["main_title"] : null)));
            echo "</h3>
        <div class=\"line-style\"><span></span></div>
        ";
            // line 5
            if ( !twig_test_empty((isset($context["icon"]) ? $context["icon"] : null))) {
                // line 6
                echo "        <i class=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["icon"]) ? $context["icon"] : null), "html", null, true));
                echo "\"></i>
        ";
            }
            // line 8
            echo "         <p class=\"subtitle\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["sub_title"]) ? $context["sub_title"] : null), "html", null, true));
            echo "</p>
    ";
        } else {
            // line 10
            echo "        <h3 class=\"title nosubtitle\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["main_title"]) ? $context["main_title"] : null)));
            echo "</h3>
        <div class=\"line-style\">";
            // line 11
            if ( !twig_test_empty((isset($context["icon"]) ? $context["icon"] : null))) {
                echo "<i class=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["icon"]) ? $context["icon"] : null), "html", null, true));
                echo "\"></i>";
            }
            echo "<span></span></div>
    ";
        }
        // line 13
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "modules/inv_shortcodes/templates/title.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 13,  75 => 11,  70 => 10,  64 => 8,  58 => 6,  56 => 5,  50 => 3,  48 => 2,  43 => 1,);
    }
}
/* <div class="title-wrapper {{ class }}">*/
/*     {% if sub_title is not empty %}*/
/*         <h3 class="title">{{ main_title|raw }}</h3>*/
/*         <div class="line-style"><span></span></div>*/
/*         {% if icon is not empty %}*/
/*         <i class="{{ icon }}"></i>*/
/*         {% endif %}*/
/*          <p class="subtitle">{{ sub_title }}</p>*/
/*     {% else %}*/
/*         <h3 class="title nosubtitle">{{ main_title|raw }}</h3>*/
/*         <div class="line-style">{% if icon is not empty %}<i class="{{ icon }}"></i>{% endif %}<span></span></div>*/
/*     {% endif %}*/
/* </div>*/
