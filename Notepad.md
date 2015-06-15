<h1>{{model.title}}</h1>

<h2>Comments</h2>


<ul>
{{#each comment in model.comments}}
<li>{{comment.text}}</li>
{{/each}}
</ul>



can also written each loop can also be written as {{#each model.comments as |comment|}} 
