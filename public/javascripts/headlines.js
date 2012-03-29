now.ready(function() {
    now.getModelsToRender(0, render);
});

function render(model) {
    if (!model) { return; }
    dust.render(model.template, model, function(err, out) {
        if (err) {
            console.log(err);
        } else {
            console.log("rendering: "+ out);
            $('.carousel-inner').append(out);
        }
    });
}