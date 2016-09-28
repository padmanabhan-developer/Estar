<?php

/* themes/enar/templates/views/views-view-bxslider--blog_ticker.html.twig */
class __TwigTemplate_5126ce29384c273fecf142bb3077896fd5e0bc124aaff4fda95b08fd3a5ec698 extends Twig_Template
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
        $tags = array("for" => 9);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('for'),
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
        echo "<div class=\"hm_new_title_con\">
\t<h4>
\t\t<i class=\"ico-streetsign\"></i>
\t\t<span><span class=\"latest_word\">Latest </span> News</span>
\t</h4>
</div>
<div class=\"hm_new_bar_con\">
<ul id=\"";
        // line 8
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["view_id"]) ? $context["view_id"] : null), "html", null, true));
        echo "\" class=\"inv-bxslider\">
\t";
        // line 9
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["rows"]) ? $context["rows"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 10
            echo "\t\t<li class=\"bxslide\">
\t\t\t";
            // line 11
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["item"], "html", null, true));
            echo "
\t\t</li>\t
\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "</ul>
</div>";
    }

    public function getTemplateName()
    {
        return "themes/enar/templates/views/views-view-bxslider--blog_ticker.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 14,  63 => 11,  60 => 10,  56 => 9,  52 => 8,  43 => 1,);
    }
}
/* <div class="hm_new_title_con">*/
/* 	<h4>*/
/* 		<i class="ico-streetsign"></i>*/
/* 		<span><span class="latest_word">Latest </span> News</span>*/
/* 	</h4>*/
/* </div>*/
/* <div class="hm_new_bar_con">*/
/* <ul id="{{view_id}}" class="inv-bxslider">*/
/* 	{% for item in rows %}*/
/* 		<li class="bxslide">*/
/* 			{{item}}*/
/* 		</li>	*/
/* 	{% endfor %}*/
/* </ul>*/
/* </div>*/
