<?php

/* modules/tb_megamenu/templates/backend/tb-megamenu-column-toolbox.html.twig */
class __TwigTemplate_e4e423bcaf2099661c75d7783979799ae6b57c525f9298302d05acbd37b075dc extends Twig_Template
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
        $tags = array("for" => 51);
        $filters = array("t" => 2);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('for'),
                array('t'),
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
        echo "<div id=\"tb-megamenu-admin-mm-toolcol\" class=\"admin-toolbox\">
  <h3>";
        // line 2
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Column Configuration")));
        echo "(<a href=\"#\" class=\"back-megamenu-toolbox\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("MegaMenu Toolbox")));
        echo "</a>)</h3>
  <p>";
        // line 3
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Allows you to: add and remove column, set grid, add block to column and style the column with extra class")));
        echo "</p>
  <ul>
    <li>
      <label class=\"hasTip\" title=\"";
        // line 6
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Add/remove Column")));
        echo " - ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Click + to add a new column on the right of the selected column. Click - to remove the selected column")));
        echo "\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Add/remove Column")));
        echo "</label>
      <fieldset class=\"btn-group\">
        <a href=\"\" class=\"btn toolcol-addcol toolbox-action first\" data-action=\"addColumn\" title=\"";
        // line 8
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Add a new column on the right of the selected column")));
        echo "\"><i class=\"icon-plus\"></i></a>
        <a href=\"\" class=\"btn toolcol-removecol toolbox-action last\" data-action=\"removeColumn\" title=\"";
        // line 9
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Remove the selected column")));
        echo "\"><i class=\"icon-minus\"></i></a>
      </fieldset>
    </li>
  </ul>
  <ul>
    <li>
      <label class=\"hasTip\" title=\"";
        // line 15
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Hide when collapse")));
        echo " - ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Hide this column when the menu is collapsed on small screen")));
        echo "\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Hide when collapse")));
        echo "</label>
      <fieldset class=\"radio btn-group toolcol-hidewhencollapse\">
        <input type=\"radio\" id=\"toggleHideWhenCollapse0\" class=\"toolbox-toggle\" data-action=\"hideWhenCollapse\" name=\"toggleHideWhenCollapse\" value=\"0\" checked=\"checked\"/>
        <label for=\"toggleHideWhenCollapse0\" title=\"";
        // line 18
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Keep showing this column when the menu is collapsed on small screen")));
        echo "\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("No")));
        echo "</label>
        <input type=\"radio\" id=\"toggleHideWhenCollapse1\" class=\"toolbox-toggle\" data-action=\"hideWhenCollapse\" name=\"toggleHideWhenCollapse\" value=\"1\"/>
        <label for=\"toggleHideWhenCollapse1\" title=\"<?php print t('Hide this column when the menu is collapsed on small screen') ?>\">";
        // line 20
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Yes")));
        echo "</label>
      </fieldset>
    </li>
  </ul>
  <ul>
    <li id=\"tb-megamenu-grid-wrapper\" title=\"";
        // line 25
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Grid (1-12)")));
        echo " - ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Set number of grid columns the selected column spans")));
        echo "\">
      <label class=\"hasTip\">";
        // line 26
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Grid (1-12)")));
        echo "</label>
      <fieldset class=\"\">
        <select class=\"toolcol-width toolbox-input toolbox-select input-mini\" name=\"toolcol-width\" data-name=\"width\">
          <option value=\"1\">1</option>
          <option value=\"2\">2</option>
          <option value=\"3\">3</option>
          <option value=\"4\">4</option>
          <option value=\"5\">5</option>
          <option value=\"6\">6</option>
          <option value=\"7\">7</option>
          <option value=\"8\">8</option>
          <option value=\"9\">9</option>
          <option value=\"10\">10</option>
          <option value=\"11\">11</option>
          <option value=\"12\">12</option>
        </select>
      </fieldset>
    </li>
  </ul>
  <ul>
    <li id=\"tb-megamenu-block-wrapper\" title=\"";
        // line 46
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Blocks")));
        echo " - ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Add/replace a block to the selected column")));
        echo "\">
      <label class=\"hasTip\">";
        // line 47
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Blocks")));
        echo "</label>
      <fieldset class=\"btn-group\">
        <select class=\"toolcol-block toolbox-input toolbox-select input-medium\" name=\"toolcol-block\" data-name=\"block\" data-placeholder=\"";
        // line 49
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Select Block")));
        echo "\" style=\"width: 200px;\">
          <option value=\"\"></option>
          ";
        // line 51
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["blocks_options"]) ? $context["blocks_options"] : null));
        foreach ($context['_seq'] as $context["block_id"] => $context["block"]) {
            // line 52
            echo "            <option value=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["block_id"], "html", null, true));
            echo "\"> ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $context["block"], "html", null, true));
            echo " </option>
          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['block_id'], $context['block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "        </select>
      </fieldset>
    </li>
  </ul>
  <ul>
    <li>
      <label class=\"hasTip\" title=\"";
        // line 60
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Show block title")));
        echo "\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Show block title")));
        echo "</label>
      <fieldset class=\"radio btn-group toolcol-showblocktitle\">
        <input type=\"radio\" id=\"toggleShowBlockTitle0\" class=\"toolbox-toggle\" data-action=\"showBlockTitle\" name=\"toggleShowBlockTitle\" value=\"0\"/>
        <label for=\"toggleShowBlockTitle0\">";
        // line 63
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("No")));
        echo "</label>
        <input type=\"radio\" id=\"toggleShowBlockTitle1\" class=\"toolbox-toggle\" data-action=\"showBlockTitle\" name=\"toggleShowBlockTitle\" value=\"1\" checked=\"checked\"/>
        <label for=\"toggleShowBlockTitle1\">";
        // line 65
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Yes")));
        echo "</label>
      </fieldset>
    </li>
  </ul>          
  <ul>
    <li title=\"";
        // line 70
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Extra class")));
        echo " - ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Add extra class to style megamenu")));
        echo "\">
      <label class=\"hasTip\">";
        // line 71
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Extra class")));
        echo "</label>
      <fieldset class=\"\">
        <input type=\"text\" class=\"input-medium toolcol-exclass toolbox-input\" name=\"toolcol-exclass\" data-name=\"class\" value=\"\" />
      </fieldset>
    </li>
  </ul>
</div>    
";
    }

    public function getTemplateName()
    {
        return "modules/tb_megamenu/templates/backend/tb-megamenu-column-toolbox.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  200 => 71,  194 => 70,  186 => 65,  181 => 63,  173 => 60,  165 => 54,  154 => 52,  150 => 51,  145 => 49,  140 => 47,  134 => 46,  111 => 26,  105 => 25,  97 => 20,  90 => 18,  80 => 15,  71 => 9,  67 => 8,  58 => 6,  52 => 3,  46 => 2,  43 => 1,);
    }
}
/* <div id="tb-megamenu-admin-mm-toolcol" class="admin-toolbox">*/
/*   <h3>{{ 'Column Configuration'|t }}(<a href="#" class="back-megamenu-toolbox">{{ 'MegaMenu Toolbox'|t }}</a>)</h3>*/
/*   <p>{{ 'Allows you to: add and remove column, set grid, add block to column and style the column with extra class'|t }}</p>*/
/*   <ul>*/
/*     <li>*/
/*       <label class="hasTip" title="{{ 'Add/remove Column'|t }} - {{ 'Click + to add a new column on the right of the selected column. Click - to remove the selected column'|t }}">{{ 'Add/remove Column'|t }}</label>*/
/*       <fieldset class="btn-group">*/
/*         <a href="" class="btn toolcol-addcol toolbox-action first" data-action="addColumn" title="{{ 'Add a new column on the right of the selected column'|t }}"><i class="icon-plus"></i></a>*/
/*         <a href="" class="btn toolcol-removecol toolbox-action last" data-action="removeColumn" title="{{ 'Remove the selected column'|t }}"><i class="icon-minus"></i></a>*/
/*       </fieldset>*/
/*     </li>*/
/*   </ul>*/
/*   <ul>*/
/*     <li>*/
/*       <label class="hasTip" title="{{ 'Hide when collapse'|t }} - {{ 'Hide this column when the menu is collapsed on small screen'|t }}">{{ 'Hide when collapse'|t }}</label>*/
/*       <fieldset class="radio btn-group toolcol-hidewhencollapse">*/
/*         <input type="radio" id="toggleHideWhenCollapse0" class="toolbox-toggle" data-action="hideWhenCollapse" name="toggleHideWhenCollapse" value="0" checked="checked"/>*/
/*         <label for="toggleHideWhenCollapse0" title="{{ 'Keep showing this column when the menu is collapsed on small screen'|t }}">{{ 'No'|t }}</label>*/
/*         <input type="radio" id="toggleHideWhenCollapse1" class="toolbox-toggle" data-action="hideWhenCollapse" name="toggleHideWhenCollapse" value="1"/>*/
/*         <label for="toggleHideWhenCollapse1" title="<?php print t('Hide this column when the menu is collapsed on small screen') ?>">{{ 'Yes'|t }}</label>*/
/*       </fieldset>*/
/*     </li>*/
/*   </ul>*/
/*   <ul>*/
/*     <li id="tb-megamenu-grid-wrapper" title="{{ 'Grid (1-12)'|t }} - {{ 'Set number of grid columns the selected column spans'|t }}">*/
/*       <label class="hasTip">{{ 'Grid (1-12)'|t }}</label>*/
/*       <fieldset class="">*/
/*         <select class="toolcol-width toolbox-input toolbox-select input-mini" name="toolcol-width" data-name="width">*/
/*           <option value="1">1</option>*/
/*           <option value="2">2</option>*/
/*           <option value="3">3</option>*/
/*           <option value="4">4</option>*/
/*           <option value="5">5</option>*/
/*           <option value="6">6</option>*/
/*           <option value="7">7</option>*/
/*           <option value="8">8</option>*/
/*           <option value="9">9</option>*/
/*           <option value="10">10</option>*/
/*           <option value="11">11</option>*/
/*           <option value="12">12</option>*/
/*         </select>*/
/*       </fieldset>*/
/*     </li>*/
/*   </ul>*/
/*   <ul>*/
/*     <li id="tb-megamenu-block-wrapper" title="{{ 'Blocks'|t }} - {{ 'Add/replace a block to the selected column'|t }}">*/
/*       <label class="hasTip">{{ 'Blocks'|t }}</label>*/
/*       <fieldset class="btn-group">*/
/*         <select class="toolcol-block toolbox-input toolbox-select input-medium" name="toolcol-block" data-name="block" data-placeholder="{{ 'Select Block'|t }}" style="width: 200px;">*/
/*           <option value=""></option>*/
/*           {% for block_id, block in blocks_options %}*/
/*             <option value="{{ block_id }}"> {{ block }} </option>*/
/*           {% endfor %}*/
/*         </select>*/
/*       </fieldset>*/
/*     </li>*/
/*   </ul>*/
/*   <ul>*/
/*     <li>*/
/*       <label class="hasTip" title="{{ 'Show block title'|t }}">{{ 'Show block title'|t }}</label>*/
/*       <fieldset class="radio btn-group toolcol-showblocktitle">*/
/*         <input type="radio" id="toggleShowBlockTitle0" class="toolbox-toggle" data-action="showBlockTitle" name="toggleShowBlockTitle" value="0"/>*/
/*         <label for="toggleShowBlockTitle0">{{ 'No'|t }}</label>*/
/*         <input type="radio" id="toggleShowBlockTitle1" class="toolbox-toggle" data-action="showBlockTitle" name="toggleShowBlockTitle" value="1" checked="checked"/>*/
/*         <label for="toggleShowBlockTitle1">{{ 'Yes'|t }}</label>*/
/*       </fieldset>*/
/*     </li>*/
/*   </ul>          */
/*   <ul>*/
/*     <li title="{{ 'Extra class'|t }} - {{ 'Add extra class to style megamenu'|t }}">*/
/*       <label class="hasTip">{{ 'Extra class'|t }}</label>*/
/*       <fieldset class="">*/
/*         <input type="text" class="input-medium toolcol-exclass toolbox-input" name="toolcol-exclass" data-name="class" value="" />*/
/*       </fieldset>*/
/*     </li>*/
/*   </ul>*/
/* </div>    */
/* */
