var inputContentAktifitas = $('#activityContent');
var btnAddActivityEl = $('#addActivity');
var listAktifitas = $('#list_Activity');
var list_activities = [];

btnAddActivityEl.on('click', function(e){
  var activity = {
    content: inputContentAktifitas.val(),
    done: false
  }
  list_activities.push(activity);
  setActivityHtml(activity, list_activities.length - 1 );
  e.preventDefault();
})
var setActivityHtml = function(activity, index){
  var html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <p>`+ activity.content +`</p>
      <div class="text-center">
    <button class="btn btn-success my-2" onClick="cekaktifitas(this)">
         <i class="fa fa-check"></i>
    </button>
  <button class="btn btn-danger my-2" onClick="deleteActivity(`+ index +`, this)">
  <i class="fa fa-trash"></i>
  </button>
  </div>
  </li>`;
  listAktifitas.append(html);
}
var cekaktifitas = function(btnEl) {
  toggleCheckButton(btnEl);
}
var toggleCheckButton = function(btnEl) {
  var el = $(btnEl);
  if( el.hasClass('btn-success') ) {
    el.removeClass('btn-success');
    el.addClass('btn-warning');
    el.children('i').removeClass();
    el.children('i').addClass('fas fa-undo');
    el.parent().siblings("p").css("text-decoration", "line-through");
  }
  else {
    el.removeClass('btn-warning');
    el.addClass('btn-success');
    el.children('i').removeClass();
    el.children('i').addClass('fa fa-check');
    el.parent().siblings("p").css("text-decoration", "unset");
  }
}
var deleteActivity = function(index, btnDeleteEl) {
  var el = $(btnDeleteEl);
  el.parent().parent("li").remove();
  list_activities.splice(index, 1);
}