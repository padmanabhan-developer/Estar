<?php

/* modules/tb_megamenu/templates/tb-megamenu.html.twig */
class __TwigTemplate_5e5e9c5e003298e0b0a05db7c06bbba050a20050f2f44ddb64332f5c470ed20c extends Twig_Template
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
        $tags = array("if" => 1);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
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

        // line 1
        if (array_key_exists("css_style", $context)) {
            // line 2
            echo "<style type=\"text/css\">
  .tb-megamenu.animate .mega > .mega-dropdown-menu, .tb-megamenu.animate.slide .mega > .mega-dropdown-menu > div {
  ";
            // line 4
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["css_style"]) ? $context["css_style"] : null), "html", null, true));
            echo "
  }
</style>
";
        }
        // line 8
        echo "<div ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attributes"]) ? $context["attributes"] : null), "html", null, true));
        echo ">
  ";
        // line 9
        if (((isset($context["section"]) ? $context["section"] : null) == "frontend")) {
            // line 10
            echo "    <button data-target=\".nav-collapse\" data-toggle=\"collapse\" class=\"btn btn-navbar tb-megamenu-button\" type=\"button\">
      <i class=\"fa fa-reorder\"></i>
    </button>
    <div class=\"nav-collapse ";
            // line 13
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((($this->getAttribute((isset($context["block_config"]) ? $context["block_config"] : null), "always-show-submenu", array(), "array")) ? (" always-show") : (""))));
            echo "\">
  ";
        }
        // line 15
        echo "  ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
  ";
        // line 16
        if (((isset($context["section"]) ? $context["section"] : null) == "frontend")) {
            // line 17
            echo "    </div>
  ";
        }
        // line 19
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/tb_megamenu/templates/tb-megamenu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 19,  80 => 17,  78 => 16,  73 => 15,  68 => 13,  63 => 10,  61 => 9,  56 => 8,  49 => 4,  45 => 2,  43 => 1,);
    }
}
/* {% if css_style is defined %}*/
/* <style type="text/css">*/
/*   .tb-megamenu.animate .mega > .mega-dropdown-menu, .tb-megamenu.animate.slide .mega > .mega-dropdown-menu > div {*/
/*   {{ css_style }}*/
/*   }*/
/* </style>*/
/* {% endif %}*/
/* <div {{ attributes }}>*/
/*   {% if section == 'frontend' %}*/
/*     <button data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar tb-megamenu-button" type="button">*/
/*       <i class="fa fa-reorder"></i>*/
/*     </button>*/
/*     <div class="nav-collapse {{ block_config['always-show-submenu'] ? ' always-show' : '' }}">*/
/*   {% endif %}*/
/*   {{ content }}*/
/*   {% if section == 'frontend' %}*/
/*     </div>*/
/*   {% endif %}*/
/* </div>*/
/* */
