<?php

/* modules/carousel_formatter/templates/carousel-field.html.twig */
class __TwigTemplate_fb8d14b29242a7dbde3a999e3ea04a0bef8d30df270fb4db64286c3861ce60ae extends Twig_Template
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
        $tags = array("if" => 1, "set" => 7, "for" => 13, "trans" => 23);
        $filters = array("length" => 4, "merge" => 7);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if', 'set', 'for', 'trans'),
                array('length', 'merge'),
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
        if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "popup", array())) {
            // line 2
            echo "<div class=\"mf-popup\">
";
        }
        // line 4
        if ((twig_length_filter($this->env, (isset($context["items"]) ? $context["items"] : null)) > 1)) {
            // line 5
            echo "\t";
            if (($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "pager", array()) == "thumbnail")) {
                // line 6
                echo "\t\t";
                if (twig_test_empty($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "interval", array()))) {
                    // line 7
                    echo "\t\t\t";
                    $context["settings"] = twig_array_merge((isset($context["settings"]) ? $context["settings"] : null), array("interval" => "false"));
                    // line 8
                    echo "\t\t";
                }
                // line 9
                echo "\t\t<div id='";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "id", array()), "html", null, true));
                echo "' data-interval=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "interval", array()), "html", null, true));
                echo "\" class='carousel-custom carousel slide' data-ride='carousel'>
\t\t\t<div class='carousel-outer'>
\t\t\t\t<!-- Wrapper for slides -->
\t\t\t\t<div class='carousel-inner'>
\t\t\t\t\t";
                // line 13
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 14
                    echo "\t\t\t\t\t\t<div class=\"item ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(((($context["key"] == 0)) ? ("active") : (""))));
                    echo "\">
\t\t\t\t\t\t\t";
                    // line 15
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["item"], "html", null, true));
                    echo " 
\t\t\t\t\t\t</div>
\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 18
                echo "\t\t\t\t</div>
\t\t\t\t";
                // line 19
                if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "control", array())) {
                    echo "    
\t\t\t\t<!-- Controls -->
\t\t\t\t<a class=\"left carousel-control\" href=\"#";
                    // line 21
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "id", array(), "array"), "html", null, true));
                    echo "\" role=\"button\" data-slide=\"prev\">
\t\t\t\t\t<span class=\"fa fa-angle-left\" aria-hidden=\"true\"></span>
\t\t\t\t\t<span class=\"sr-only\">";
                    // line 23
                    echo t("Previous", array());
                    echo "</span>
\t\t\t\t</a>
\t\t\t\t<a class=\"right carousel-control\" href=\"#";
                    // line 25
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "slider_id", array(), "array"), "html", null, true));
                    echo "\" role=\"button\" data-slide=\"next\">
\t\t\t\t\t<span class=\"fa fa-angle-right\" aria-hidden=\"true\"></span>
\t\t\t\t\t<span class=\"sr-only\">";
                    // line 27
                    echo t("Next", array());
                    echo "</span>
\t\t\t\t</a>
\t\t\t\t";
                }
                // line 30
                echo "\t\t\t</div>
\t\t\t
\t\t\t<!-- Indicators -->
\t\t\t<ol class='carousel-indicators'>
\t\t\t\t";
                // line 34
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["thumbs"]) ? $context["thumbs"] : null));
                foreach ($context['_seq'] as $context["key"] => $context["thumb"]) {
                    // line 35
                    echo "\t\t\t\t<li data-target=\"#";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "id", array(), "array"), "html", null, true));
                    echo "\" data-slide-to=\"";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["key"], "html", null, true));
                    echo "\" class=\"";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(((($context["key"] == 0)) ? ("active") : (""))));
                    echo "\">
\t\t\t\t\t<img src='";
                    // line 36
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["thumb"], "html", null, true));
                    echo "' alt='' />
\t\t\t\t</li>
\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['thumb'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 39
                echo "\t\t\t</ol>
\t\t</div>
\t";
            } else {
                // line 42
                echo "
\t\t";
                // line 43
                if (twig_test_empty($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "interval", array()))) {
                    // line 44
                    echo "\t\t\t";
                    $context["settings"] = twig_array_merge((isset($context["settings"]) ? $context["settings"] : null), array("interval" => "false"));
                    // line 45
                    echo "\t\t";
                }
                // line 46
                echo "\t\t<div id=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "id", array()), "html", null, true));
                echo "\" data-interval=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "interval", array()), "html", null, true));
                echo "\" class=\"carousel slide\" data-ride=\"carousel\">
\t\t  ";
                // line 47
                if (($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "pager", array()) == "control")) {
                    // line 48
                    echo "\t\t\t<!-- Indicators -->
\t\t\t<ol class=\"carousel-indicators\">
\t\t\t";
                    // line 50
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                    foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                        // line 51
                        echo "\t\t\t\t<li data-target=\"#";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "id", array(), "array"), "html", null, true));
                        echo "\" data-slide-to=\"";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["key"], "html", null, true));
                        echo "\" class=\"";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(((($context["key"] == 0)) ? ("active") : (""))));
                        echo "\"></li>
\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 53
                    echo "\t\t\t</ol>
\t\t  ";
                }
                // line 55
                echo "\t\t  
\t\t  <!-- Wrapper for slides -->
\t\t  <div class=\"carousel-inner\" role=\"listbox\">
\t\t\t";
                // line 58
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 59
                    echo "\t\t\t<div class=\"item ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(((($context["key"] == 0)) ? ("active") : (""))));
                    echo "\">
\t\t\t\t";
                    // line 60
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["item"], "html", null, true));
                    echo " 
\t\t\t</div>
\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 63
                echo "\t\t  </div>
\t\t  
\t\t ";
                // line 65
                if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "control", array())) {
                    // line 66
                    echo "\t\t  <!-- Controls -->
\t\t  <a class=\"left carousel-control\" href=\"#";
                    // line 67
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "id", array(), "array"), "html", null, true));
                    echo "\" role=\"button\" data-slide=\"prev\">
\t\t\t<span class=\"fa fa-angle-left\" aria-hidden=\"true\"></span>
\t\t\t<span class=\"sr-only\">";
                    // line 69
                    echo t("Previous", array());
                    echo "</span>
\t\t  </a>
\t\t  <a class=\"right carousel-control\" href=\"#";
                    // line 71
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "slider_id", array(), "array"), "html", null, true));
                    echo "\" role=\"button\" data-slide=\"next\">
\t\t\t<span class=\"fa fa-angle-right\" aria-hidden=\"true\"></span>
\t\t\t<span class=\"sr-only\">";
                    // line 73
                    echo t("Next", array());
                    echo "</span>
\t\t  </a>
\t\t  ";
                }
                // line 76
                echo "\t\t</div>
\t";
            }
        } else {
            // line 78
            echo "\t
\t";
            // line 79
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
            foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                // line 80
                echo "\t\t";
                if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "popup", array())) {
                    // line 81
                    echo "\t\t<div class=\"mf-no-gallery\">
\t\t";
                }
                // line 83
                echo "\t\t\t";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["item"], "html", null, true));
                echo "
\t\t";
                // line 84
                if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "popup", array())) {
                    echo "\t\t
\t\t</div>
\t\t";
                }
                // line 87
                echo "\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        // line 89
        if ($this->getAttribute((isset($context["settings"]) ? $context["settings"] : null), "popup", array())) {
            // line 90
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/carousel_formatter/templates/carousel-field.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  290 => 90,  288 => 89,  281 => 87,  275 => 84,  270 => 83,  266 => 81,  263 => 80,  259 => 79,  256 => 78,  251 => 76,  245 => 73,  240 => 71,  235 => 69,  230 => 67,  227 => 66,  225 => 65,  221 => 63,  212 => 60,  207 => 59,  203 => 58,  198 => 55,  194 => 53,  181 => 51,  177 => 50,  173 => 48,  171 => 47,  164 => 46,  161 => 45,  158 => 44,  156 => 43,  153 => 42,  148 => 39,  139 => 36,  130 => 35,  126 => 34,  120 => 30,  114 => 27,  109 => 25,  104 => 23,  99 => 21,  94 => 19,  91 => 18,  82 => 15,  77 => 14,  73 => 13,  63 => 9,  60 => 8,  57 => 7,  54 => 6,  51 => 5,  49 => 4,  45 => 2,  43 => 1,);
    }
}
/* {% if (settings.popup) %}*/
/* <div class="mf-popup">*/
/* {% endif %}*/
/* {% if (items|length > 1) %}*/
/* 	{% if (settings.pager == 'thumbnail') %}*/
/* 		{% if (settings.interval is empty) %}*/
/* 			{% set settings = settings | merge({ interval : 'false'}) %}*/
/* 		{% endif %}*/
/* 		<div id='{{ settings.id }}' data-interval="{{ settings.interval }}" class='carousel-custom carousel slide' data-ride='carousel'>*/
/* 			<div class='carousel-outer'>*/
/* 				<!-- Wrapper for slides -->*/
/* 				<div class='carousel-inner'>*/
/* 					{% for key, item in items %}*/
/* 						<div class="item {{ (key == 0) ? 'active' : '' }}">*/
/* 							{{ item }} */
/* 						</div>*/
/* 					{% endfor%}*/
/* 				</div>*/
/* 				{% if (settings.control) %}    */
/* 				<!-- Controls -->*/
/* 				<a class="left carousel-control" href="#{{ settings['id'] }}" role="button" data-slide="prev">*/
/* 					<span class="fa fa-angle-left" aria-hidden="true"></span>*/
/* 					<span class="sr-only">{% trans 'Previous' %}</span>*/
/* 				</a>*/
/* 				<a class="right carousel-control" href="#{{ settings['slider_id'] }}" role="button" data-slide="next">*/
/* 					<span class="fa fa-angle-right" aria-hidden="true"></span>*/
/* 					<span class="sr-only">{% trans 'Next' %}</span>*/
/* 				</a>*/
/* 				{% endif %}*/
/* 			</div>*/
/* 			*/
/* 			<!-- Indicators -->*/
/* 			<ol class='carousel-indicators'>*/
/* 				{% for key, thumb in thumbs %}*/
/* 				<li data-target="#{{ settings['id'] }}" data-slide-to="{{ key }}" class="{{ (key == 0) ? 'active' : '' }}">*/
/* 					<img src='{{ thumb }}' alt='' />*/
/* 				</li>*/
/* 				{% endfor%}*/
/* 			</ol>*/
/* 		</div>*/
/* 	{% else %}*/
/* */
/* 		{% if (settings.interval is empty) %}*/
/* 			{% set settings = settings | merge({ interval : 'false'}) %}*/
/* 		{% endif %}*/
/* 		<div id="{{ settings.id }}" data-interval="{{ settings.interval }}" class="carousel slide" data-ride="carousel">*/
/* 		  {% if (settings.pager == 'control') %}*/
/* 			<!-- Indicators -->*/
/* 			<ol class="carousel-indicators">*/
/* 			{% for key, item in items %}*/
/* 				<li data-target="#{{ settings['id'] }}" data-slide-to="{{ key }}" class="{{ (key == 0) ? 'active' : '' }}"></li>*/
/* 			{% endfor%}*/
/* 			</ol>*/
/* 		  {% endif %}*/
/* 		  */
/* 		  <!-- Wrapper for slides -->*/
/* 		  <div class="carousel-inner" role="listbox">*/
/* 			{% for key, item in items %}*/
/* 			<div class="item {{ (key == 0) ? 'active' : '' }}">*/
/* 				{{ item }} */
/* 			</div>*/
/* 			{% endfor%}*/
/* 		  </div>*/
/* 		  */
/* 		 {% if (settings.control) %}*/
/* 		  <!-- Controls -->*/
/* 		  <a class="left carousel-control" href="#{{ settings['id'] }}" role="button" data-slide="prev">*/
/* 			<span class="fa fa-angle-left" aria-hidden="true"></span>*/
/* 			<span class="sr-only">{% trans 'Previous' %}</span>*/
/* 		  </a>*/
/* 		  <a class="right carousel-control" href="#{{ settings['slider_id'] }}" role="button" data-slide="next">*/
/* 			<span class="fa fa-angle-right" aria-hidden="true"></span>*/
/* 			<span class="sr-only">{% trans 'Next' %}</span>*/
/* 		  </a>*/
/* 		  {% endif %}*/
/* 		</div>*/
/* 	{% endif %}*/
/* {% else %}	*/
/* 	{% for key, item in items %}*/
/* 		{% if (settings.popup) %}*/
/* 		<div class="mf-no-gallery">*/
/* 		{% endif %}*/
/* 			{{ item }}*/
/* 		{% if (settings.popup) %}		*/
/* 		</div>*/
/* 		{% endif %}*/
/* 	{% endfor%}*/
/* {% endif %}*/
/* {% if (settings.popup) %}*/
/* </div>*/
/* {% endif %}*/
