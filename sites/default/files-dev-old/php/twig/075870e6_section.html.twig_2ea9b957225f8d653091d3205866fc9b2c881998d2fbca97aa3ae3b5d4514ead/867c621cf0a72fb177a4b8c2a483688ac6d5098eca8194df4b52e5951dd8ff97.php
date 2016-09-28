<?php

/* themes/innovation/templates/base/section.html.twig */
class __TwigTemplate_57058c331dd766ec91235e99e02b48a291d3c41e4081ed05f0557de0d0468ed9 extends Twig_Template
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
        $filters = array("without" => 3);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array('without'),
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
        echo "<div";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attributes"]) ? $context["attributes"] : null), "html", null, true));
        echo ">
  <div class=\"section-inner\">
  <div";
        // line 3
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, twig_without(twig_without($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "removeClass", array(0 => "inv-section"), "method"), "removeClass", array(0 => "inv-sticky"), "method"), "addClass", array(0 => (isset($context["container_class"]) ? $context["container_class"] : null)), "method"), "id"), "style"), "html", null, true));
        echo ">
    <div class=\"row\">";
        // line 4
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "</div>
  </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/innovation/templates/base/section.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  53 => 4,  49 => 3,  43 => 1,);
    }
}
/* <div{{ attributes }}>*/
/*   <div class="section-inner">*/
/*   <div{{ attributes.removeClass('inv-section').removeClass('inv-sticky').addClass(container_class)|without('id')|without('style') }}>*/
/*     <div class="row">{{ content }}</div>*/
/*   </div>*/
/*   </div>*/
/* </div>*/
/* */
