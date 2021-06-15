---
layout: blog-post
title: Blog
permalink: /blog/
---
<section class="page-section" id="blog-list">
  <div class="container min-vh-80 vw-lg-60">

    <div class="text-center">
      <h2 class="section-heading text-uppercase">Blog</h2>
      <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> -->
    </div>
    {%- if site.posts.size > 0 -%}
    {%- for post in site.posts -%}
    <div class="row py-2">
      <div class="col-xl-4 pt-2 pb-1 blog-list-thumbnail align-self-center d-flex justify-content-center">
        <img src="{{site.baseurl}}/{{ post.thumbnail }}" alt="">
      </div>
      <div class="col blog-list-title">
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        {%- assign date_format = "%Y-%m-%d" -%}
        <br>
        <a>
          {{ post.date | date: date_format }}
        </a>
        <hr>
        <p>
          {{ post.description | date: date_format }}
        </p>
      </div>
      <hr>
    </div>
    {%- endfor -%}
    {%- endif -%}
  </div>

</section>
<script>
  window.onload = function () {
    document.body.querySelector('#mainNav').classList.add('navbar-shrink');
  }
</script>