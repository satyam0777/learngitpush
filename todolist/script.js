$('body')
     .append(
        $('<h1>').text('todo list').addClass('heading')
     )
     .append(
        $('<div>')
            .addClass('inputDetails')
            .append(
                $('<input>')
                .attr('placeholder','Enter New Task')
                .attr('type','text')
                ,addClass('newtask')

            )
            .append(
                $('<button>')
                    .text('Add text')
                    .addClass('btn')
                    .click(ev=>{
                       
                        

                    })
             )
               
     )
     
     .append(
        $('<ul>')
          .addClass('tasklist')
     )