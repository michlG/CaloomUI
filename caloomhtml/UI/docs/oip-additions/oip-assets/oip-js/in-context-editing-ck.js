$(document).on("click",".open-IncontextEditDialog_Text_Short",function(){var e=$(this).hasClass("noteditable");if(e==1)return;var t=$(this).data("id"),n=$(this).text();$(".modal-body #ObjectFieldID").val(t);$(".modal-body #Text_Short").val(n);$("#IncontextEditDialog_Text_Short").modal("show")});$(document).on("click",".open-IncontextEditDialog_Text_Long",function(){var e=$(this).hasClass("noteditable");if(e==1)return;var t=$(this).data("id"),n=$(this).text();$(".modal-body #ObjectFieldID").val(t);$(".modal-body #Text_Long").val(n);addRichTextEditTextLong();$("#IncontextEditDialog_Text_Long").modal("show")});