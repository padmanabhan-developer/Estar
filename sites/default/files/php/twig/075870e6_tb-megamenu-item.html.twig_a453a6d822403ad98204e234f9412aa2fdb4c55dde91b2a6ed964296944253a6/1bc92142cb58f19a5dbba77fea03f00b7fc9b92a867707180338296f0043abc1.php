<?php

/* modules/tb_megamenu/templates/tb-megamenu-item.html.twig */
class __TwigTemplate_5a258181e9584956c1921b580a3553f8d3b6df53edeb01409b252c46026e776a extends Twig_Template
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
        $tags = array("if" => 3);
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
        echo "<li ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attributes"]) ? $context["attributes"] : null), "html", null, true));
        echo " >
  <a href=\"";
        // line 2
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["link"]) ? $context["link"] : null), "url", array(), "array"), "html", null, true));
        echo "\" ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["link"]) ? $context["link"] : null), "attributes", array(), "array"), "html", null, true));
        echo ">
    ";
        // line 3
        if ($this->getAttribute((isset($context["item_config"]) ? $context["item_config"] : null), "xicon", array(), "array")) {
            // line 4
            echo "      <i class=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["item_config"]) ? $context["item_config"] : null), "xicon", array(), "array"), "html", null, true));
            echo "\"></i>
    ";
        }
        // line 6
        echo "    ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["link"]) ? $context["link"] : null), "title", array(), "array"), "html", null, true));
        echo "
    ";
        // line 7
        if (((isset($context["submenu"]) ? $context["submenu"] : null) && $this->getAttribute((isset($context["block_config"]) ? $context["block_config"] : null), "auto-arrow", array(), "array"))) {
            // line 8
            echo "      <span class=\"caret\"></span>
    ";
        }
        // line 10
        echo "    ";
        if ($this->getAttribute((isset($context["item_config"]) ? $context["item_config"] : null), "caption", array(), "array")) {
            // line 11
            echo "      <span class=\"mega-caption\"> ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["item_config"]) ? $context["item_config"] : null), "caption", array(), "array"), "html", null, true));
            echo "</span>
    ";
        }
        // line 13
        echo "  </a>
  ";
        // line 14
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["submenu"]) ? $context["submenu"] : null), "html", null, true));
        echo "
</li>";
    }

    public function getTemplateName()
    {
        return "modules/tb_megamenu/templates/tb-megamenu-item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  85 => 14,  82 => 13,  76 => 11,  73 => 10,  69 => 8,  67 => 7,  62 => 6,  56 => 4,  54 => 3,  48 => 2,  43 => 1,);
    }
}
/* <li {{ attributes }} >*/
/*   <a href="{{ link['url'] }}" {{ link['attributes'] }}>*/
/*     {% if  item_config['xicon'] %}*/
/*       <i class="{{ item_config['xicon'] }}"></i>*/
/*     {% endif %}*/
/*     {{ link['title'] }}*/
/*     {% if submenu and block_config['auto-arrow'] %}*/
/*       <span class="caret"></span>*/
/*     {% endif %}*/
/*     {% if item_config['caption'] %}*/
/*       <span class="mega-caption"> {{ item_config['caption'] }}</span>*/
/*     {% endif %}*/
/*   </a>*/
/*   {{ submenu }}*/
/* </li>*/
