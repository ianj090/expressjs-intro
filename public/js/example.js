$(document).ready(function() {
    $('.send').click(function() {
        let newName = $('#nombre').val()
        console.log(newName);
        if (newName && newName.length > 0) {
            $.post('/save-user', {name:newName}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();
                }, 2000);
            })
        }
    })
})

$(document).ready(function() {
    $('.delete').click(function() {
        let someName = $(this).closest('#target').clone().children().remove().end().text()
        let Name = someName.replace(" ", "")
        console.log(Name);
        $(this).closest('#target').remove()
        $.post('/delete-user', {name:Name}, function(data, status) {
            console.log(`${data.message} and status is ${status}`)
            alert(data.message)
        })
    })
})
