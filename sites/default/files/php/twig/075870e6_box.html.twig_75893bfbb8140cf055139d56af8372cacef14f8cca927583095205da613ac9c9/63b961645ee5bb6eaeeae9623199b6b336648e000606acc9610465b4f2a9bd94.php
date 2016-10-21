<?php

/* modules/inv_shortcodes/templates/box.html.twig */
class __TwigTemplate_bb9663e6dd29e0696fe1f8538b52b0a7fc5b8a6889d68713fb532675f8115e35 extends Twig_Template
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
        $filters = array("raw" => 5);
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
        echo "<div class=\"innovation-shortcode-box ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["class"]) ? $context["class"] : null), "html", null, true));
        echo "\">
    ";
        // line 2
        if ( !twig_test_empty((isset($context["place_holder"]) ? $context["place_holder"] : null))) {
            // line 3
            echo "        <div class=\"box-icon\">
            <span>
                ";
            // line 5
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["place_holder"]) ? $context["place_holder"] : null)));
            echo "
            </span>
        </div>
    ";
        }
        // line 9
        echo "    <div class=\"box-content-wrapper\">
    ";
        // line 10
        if ( !twig_test_empty((isset($context["title"]) ? $context["title"] : null))) {
            // line 11
            echo "        <h3 class=\"box-title\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true));
            echo "</h3>
    ";
        }
        // line 13
        echo "    ";
        if ( !twig_test_empty((isset($context["content"]) ? $context["content"] : null))) {
            // line 14
            echo "        <div class=\"box-content\">
            ";
            // line 15
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["content"]) ? $context["content"] : null)));
            echo "
        </div>
    ";
        }
        // line 18
        echo "    ";
        if ( !twig_test_empty((isset($context["readmore"]) ? $context["readmore"] : null))) {
            // line 19
            echo "        <div class='readmore-box'><a href='";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["link"]) ? $context["link"] : null), "html", null, true));
            echo "'><span>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["readmore"]) ? $context["readmore"] : null), "html", null, true));
            echo "</span></a></div>
    ";
        }
        // line 21
        echo "    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "modules/inv_shortcodes/templates/box.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 21,  87 => 19,  84 => 18,  78 => 15,  75 => 14,  72 => 13,  66 => 11,  64 => 10,  61 => 9,  54 => 5,  50 => 3,  48 => 2,  43 => 1,);
    }
}
/* <div class="innovation-shortcode-box {{ class }}">*/
/*     {% if  place_holder  is not empty %}*/
/*         <div class="box-icon">*/
/*             <span>*/
/*                 {{ place_holder | raw }}*/
/*             </span>*/
/*         </div>*/
/*     {% endif %}*/
/*     <div class="box-content-wrapper">*/
/*     {% if  title is not empty %}*/
/*         <h3 class="box-title">{{ title }}</h3>*/
/*     {% endif %}*/
/*     {% if  content is not empty %}*/
/*         <div class="box-content">*/
/*             {{ content | raw }}*/
/*         </div>*/
/*     {% endif %}*/
/*     {% if  readmore is not empty %}*/
/*         <div class='readmore-box'><a href='{{ link }}'><span>{{ readmore }}</span></a></div>*/
/*     {% endif %}*/
/*     </div>*/
/* </div>*/
