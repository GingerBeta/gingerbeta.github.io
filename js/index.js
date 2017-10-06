

/*----- Menu -----*/

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });
});

/*----- RSS Feed -----*/

function myBlog(data) {
  console.log(data)
  data["feed"]["entry"].forEach(entryProcessor)
}

function entryProcessor(post, index) {
  // console.log(post);
  // console.log(post['title']);
  // console.log(post['published']);
  // console.log(post['content']);
  console.log(post)
  var blogtitle = post['title']['$t']
  var blogdate = post['published']['$t']
  var blogcopy = post['link']['$t']
  var blogpost = '<li class="something">'+blogtitle + ' ' +blogdate+ ' '+ blogcopy+'</li>'
  // console.log(blogpost)
  $('#myblog').append(blogpost)
}
