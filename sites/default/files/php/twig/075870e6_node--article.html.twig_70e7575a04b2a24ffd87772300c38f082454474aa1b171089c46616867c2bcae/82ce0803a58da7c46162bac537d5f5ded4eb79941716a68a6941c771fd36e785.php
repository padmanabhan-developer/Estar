<?php

/* themes/enar/templates/node/node--article.html.twig */
class __TwigTemplate_1c4122bd71faf2eab27dfc65d7bf48ef82cddb474e4cb1c7de0ba7f3ae008e71 extends Twig_Template
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
        $tags = array("trans" => 79, "if" => 80);
        $filters = array("date" => 78);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('trans', 'if'),
                array('date'),
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

        // line 68
        echo "<article";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["attributes"]) ? $context["attributes"] : null), "html", null, true));
        echo ">

  ";
        // line 70
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
  ";
        // line 71
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "
  <div  class=\"blog-item blog-post\">
    <div class=\"blog-grid-con\">
      <h2 class=\"title1 upper\" ";
        // line 74
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_attributes"]) ? $context["title_attributes"] : null), "html", null, true));
        echo ">
        <a href=\"";
        // line 75
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url"]) ? $context["url"] : null), "html", null, true));
        echo "\" rel=\"bookmark\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
        echo "</a>
      </h2>
      <ul class=\"list-inline post-meta-info\">
        <li class=\"meta-date\"><i class=\"ico-clock7\"></i>";
        // line 78
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, twig_date_format_filter($this->env, $this->getAttribute((isset($context["node"]) ? $context["node"] : null), "getDateCreated", array(), "method"), "M d, Y"), "html", null, true));
        echo "</li>
        <!-- <li class=\"meta-comments\"><i class=\"ico-comment-o\"></i> ";
        // line 79
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($this->getAttribute((isset($context["node"]) ? $context["node"] : null), "comment", array()), "comment_count", array()), "html", null, true));
        echo " ";
        echo t("comment", array());
        echo "</li> -->
        ";
        // line 80
        if ($this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_blog_categories", array())) {
            // line 81
            echo "          <li class=\"meta-categories\"><i class=\"ico-folder-open-o\"></i>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_blog_categories", array()), "html", null, true));
            echo "</li>
        ";
        }
        // line 83
        echo "        <!-- <li class=\"meta-author\"><i class=\"ico-user5\"></i>";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["author_name"]) ? $context["author_name"] : null), "html", null, true));
        echo "</li> -->
      </ul>
    </div>
    <div class=\"feature_inner\">
      <div class=\"feature_inner_corners\">
        ";
        // line 88
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_image", array()), "html", null, true));
        echo "
      </div>
    </div>
    <div class=\"blog-grid-con\">
      <div class='blog-shortdesc'>";
        // line 92
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "body", array()), "html", null, true));
        echo "</div>
    </div>
\t<div id=\"share_on_socials\">
\t\t";
        // line 95
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "sharethis_content", array()), "html", null, true));
        echo "
\t</div>
\t<div class=\"small_title\">
\t\t<span class=\"small_title_con\">
\t\t\t<span class=\"s_icon\"><i class=\"ico-tag4\"></i></span>
\t\t\t<span class=\"s_text\">";
        // line 100
        echo t("TAGS", array());
        echo "</span>
\t\t</span>
\t</div>
\t<div class=\"tags_con\">
\t\t";
        // line 104
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "field_tags", array()), "html", null, true));
        echo "
\t</div>
\t\t";
        // line 106
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "comment", array()), "html", null, true));
        echo "
  </div>
</article>
";
    }

    public function getTemplateName()
    {
        return "themes/enar/templates/node/node--article.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  131 => 106,  126 => 104,  119 => 100,  111 => 95,  105 => 92,  98 => 88,  89 => 83,  83 => 81,  81 => 80,  75 => 79,  71 => 78,  63 => 75,  59 => 74,  53 => 71,  49 => 70,  43 => 68,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display a node.*/
/*  **/
/*  * Available variables:*/
/*  * - node: The node entity with limited access to object properties and methods.*/
/*      Only "getter" methods (method names starting with "get", "has", or "is")*/
/*      and a few common methods such as "id" and "label" are available. Calling*/
/*      other methods (such as node.delete) will result in an exception.*/
/*  * - label: The title of the node.*/
/*  * - content: All node items. Use {{ content }} to print them all,*/
/*  *   or print a subset such as {{ content.field_example }}. Use*/
/*  *   {{ content|without('field_example') }} to temporarily suppress the printing*/
/*  *   of a given child element.*/
/*  * - author_picture: The node author user entity, rendered using the "compact"*/
/*  *   view mode.*/
/*  * - metadata: Metadata for this node.*/
/*  * - date: Themed creation date field.*/
/*  * - author_name: Themed author name field.*/
/*  * - url: Direct URL of the current node.*/
/*  * - display_submitted: Whether submission information should be displayed.*/
/*  * - attributes: HTML attributes for the containing element.*/
/*  *   The attributes.class element may contain one or more of the following*/
/*  *   classes:*/
/*  *   - node: The current template type (also known as a "theming hook").*/
/*  *   - node--type-[type]: The current node type. For example, if the node is an*/
/*  *     "Article" it would result in "node--type-article". Note that the machine*/
/*  *     name will often be in a short form of the human readable label.*/
/*  *   - node--view-mode-[view_mode]: The View Mode of the node; for example, a*/
/*  *     teaser would result in: "node--view-mode-teaser", and*/
/*  *     full: "node--view-mode-full".*/
/*  *   The following are controlled through the node publishing options.*/
/*  *   - node--promoted: Appears on nodes promoted to the front page.*/
/*  *   - node--sticky: Appears on nodes ordered above other non-sticky nodes in*/
/*  *     teaser listings.*/
/*  *   - node--unpublished: Appears on unpublished nodes visible only to site*/
/*  *     admins.*/
/*  * - title_attributes: Same as attributes, except applied to the main title*/
/*  *   tag that appears in the template.*/
/*  * - content_attributes: Same as attributes, except applied to the main*/
/*  *   content tag that appears in the template.*/
/*  * - author_attributes: Same as attributes, except applied to the author of*/
/*  *   the node tag that appears in the template.*/
/*  * - title_prefix: Additional output populated by modules, intended to be*/
/*  *   displayed in front of the main title tag that appears in the template.*/
/*  * - title_suffix: Additional output populated by modules, intended to be*/
/*  *   displayed after the main title tag that appears in the template.*/
/*  * - view_mode: View mode; for example, "teaser" or "full".*/
/*  * - teaser: Flag for the teaser state. Will be true if view_mode is 'teaser'.*/
/*  * - page: Flag for the full page state. Will be true if view_mode is 'full'.*/
/*  * - readmore: Flag for more state. Will be true if the teaser content of the*/
/*  *   node cannot hold the main body content.*/
/*  * - logged_in: Flag for authenticated user status. Will be true when the*/
/*  *   current user is a logged-in member.*/
/*  * - is_admin: Flag for admin user status. Will be true when the current user*/
/*  *   is an administrator.*/
/*  **/
/*  * @see template_preprocess_node()*/
/*  **/
/*  * @todo Remove the id attribute (or make it a class), because if that gets*/
/*  *   rendered twice on a page this is invalid CSS for example: two lists*/
/*  *   in different view modes.*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* <article{{ attributes }}>*/
/* */
/*   {{ title_prefix }}*/
/*   {{ title_suffix }}*/
/*   <div  class="blog-item blog-post">*/
/*     <div class="blog-grid-con">*/
/*       <h2 class="title1 upper" {{ title_attributes }}>*/
/*         <a href="{{ url }}" rel="bookmark">{{ label }}</a>*/
/*       </h2>*/
/*       <ul class="list-inline post-meta-info">*/
/*         <li class="meta-date"><i class="ico-clock7"></i>{{ node.getDateCreated()|date("M d, Y") }}</li>*/
/*         <!-- <li class="meta-comments"><i class="ico-comment-o"></i> {{ node.comment.comment_count }} {% trans "comment" %}</li> -->*/
/*         {% if content.field_blog_categories%}*/
/*           <li class="meta-categories"><i class="ico-folder-open-o"></i>{{ content.field_blog_categories }}</li>*/
/*         {% endif %}*/
/*         <!-- <li class="meta-author"><i class="ico-user5"></i>{{ author_name }}</li> -->*/
/*       </ul>*/
/*     </div>*/
/*     <div class="feature_inner">*/
/*       <div class="feature_inner_corners">*/
/*         {{ content.field_image}}*/
/*       </div>*/
/*     </div>*/
/*     <div class="blog-grid-con">*/
/*       <div class='blog-shortdesc'>{{ content.body}}</div>*/
/*     </div>*/
/* 	<div id="share_on_socials">*/
/* 		{{ content.sharethis_content }}*/
/* 	</div>*/
/* 	<div class="small_title">*/
/* 		<span class="small_title_con">*/
/* 			<span class="s_icon"><i class="ico-tag4"></i></span>*/
/* 			<span class="s_text">{% trans "TAGS" %}</span>*/
/* 		</span>*/
/* 	</div>*/
/* 	<div class="tags_con">*/
/* 		{{ content.field_tags }}*/
/* 	</div>*/
/* 		{{ content.comment }}*/
/*   </div>*/
/* </article>*/
/* */
