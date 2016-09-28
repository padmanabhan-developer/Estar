<?php

/* modules/inv_views_grid/templates/views-view-invgrid.html.twig */
class __TwigTemplate_e8d750f01751ef88bbae4280423d86482c14dfbeb8d6e083030f104abd35e1eb extends Twig_Template
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
        $tags = array("if" => 1, "trans" => 4, "for" => 5);
        $filters = array("clean_class" => 13);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'trans', 'for'),
                array('clean_class'),
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
        if ($this->getAttribute((isset($context["options"]) ? $context["options"] : null), "grid_filter", array(), "array")) {
            // line 2
            echo "<div class=\"grid-filter\">
\t<ul class=\"inv-grid-filter clearfix\">
\t\t<li><a class=\"active\" href=\"#\" data-filter=\"*\"><span>";
            // line 4
            echo t("Show All", array());
            echo "</span></a></li>
\t\t";
            // line 5
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["categories"]) ? $context["categories"] : null));
            foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                // line 6
                echo "\t\t<li>
\t\t\t<a href=\"#\" class=\"";
                // line 7
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["key"], "html", null, true));
                echo "\" data-filter=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["key"], "html", null, true));
                echo "\"><span>";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["value"], "html", null, true));
                echo "</span></a>
\t\t</li>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 10
            echo "\t</ul>
</div>
";
        }
        // line 13
        echo "<div id=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["view_id"]) ? $context["view_id"] : null), "html", null, true));
        echo "\" class=\"inv-grid ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, \Drupal\Component\Utility\Html::getClass($this->getAttribute((isset($context["options"]) ? $context["options"] : null), "grid_style", array(), "array")), "html", null, true));
        echo " grid-lg-";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "grid_cols_lg", array(), "array"), "html", null, true));
        echo " grid-md-";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "grid_cols_md", array(), "array"), "html", null, true));
        echo " grid-sm-";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "grid_cols_sm", array(), "array"), "html", null, true));
        echo " grid-xs-";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "grid_cols_xs", array(), "array"), "html", null, true));
        echo "\">
\t<div class=\"inv-grid-inner\">
\t\t";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 16
            echo "\t\t<div class=\"inv-grid-item ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "class", array()), "html", null, true));
            echo "\" data-index=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["loop"], "index0", array()), "html", null, true));
            echo "\">
\t\t\t";
            // line 17
            if ($this->getAttribute($context["item"], "background", array(), "any", true, true)) {
                // line 18
                echo "\t\t\t\t<div class=\"inv-grid-item-inner\" style=\"background-image:url('";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "background", array()), "html", null, true));
                echo "')\">
\t\t\t\t\t";
                // line 19
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "content", array()), "html", null, true));
                echo "
\t\t\t\t</div>
\t\t\t";
            } else {
                // line 22
                echo "\t\t\t\t<div class=\"inv-grid-item-inner\">
\t\t\t\t\t";
                // line 23
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "content", array()), "html", null, true));
                echo "
\t\t\t\t</div>
\t\t\t";
            }
            // line 26
            echo "\t\t</div>
\t\t";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 28
        echo "\t\t<div class=\"shuffle__sizer\"></div>
\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/inv_views_grid/templates/views-view-invgrid.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  155 => 28,  140 => 26,  134 => 23,  131 => 22,  125 => 19,  120 => 18,  118 => 17,  111 => 16,  94 => 15,  78 => 13,  73 => 10,  60 => 7,  57 => 6,  53 => 5,  49 => 4,  45 => 2,  43 => 1,);
    }
}
/* {% if (options['grid_filter'])  %}*/
/* <div class="grid-filter">*/
/* 	<ul class="inv-grid-filter clearfix">*/
/* 		<li><a class="active" href="#" data-filter="*"><span>{% trans "Show All" %}</span></a></li>*/
/* 		{% for key, value in categories %}*/
/* 		<li>*/
/* 			<a href="#" class="{{ key }}" data-filter="{{ key }}"><span>{{ value }}</span></a>*/
/* 		</li>*/
/* 		{% endfor %}*/
/* 	</ul>*/
/* </div>*/
/* {% endif %}*/
/* <div id="{{view_id}}" class="inv-grid {{ options['grid_style']|clean_class }} grid-lg-{{ options['grid_cols_lg'] }} grid-md-{{ options['grid_cols_md'] }} grid-sm-{{ options['grid_cols_sm'] }} grid-xs-{{ options['grid_cols_xs'] }}">*/
/* 	<div class="inv-grid-inner">*/
/* 		{% for item in items %}*/
/* 		<div class="inv-grid-item {{ item.class }}" data-index="{{ loop.index0 }}">*/
/* 			{% if item.background is defined %}*/
/* 				<div class="inv-grid-item-inner" style="background-image:url('{{ item.background }}')">*/
/* 					{{ item.content }}*/
/* 				</div>*/
/* 			{% else %}*/
/* 				<div class="inv-grid-item-inner">*/
/* 					{{ item.content }}*/
/* 				</div>*/
/* 			{% endif %}*/
/* 		</div>*/
/* 		{% endfor %}*/
/* 		<div class="shuffle__sizer"></div>*/
/* 	</div>*/
/* </div>*/
/* */
