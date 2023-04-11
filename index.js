const result = $("#result");

$(".btn").click((event) => {
  if (result.val().length < 10  && result.val() !== 'Inavalid Number?') {
        if(event.target.value === '=' && result.val() === ''){
            result.val('')
        }else{
            if (event.target.value === "C") {
                result.val("");
            } else {
                if (event.target.value === "=" && result.val() !== "") {
                    try{
                        if(result.val() === 'Inavalid Number?'){
                            result.val('Inavalid Number?');
                        }else{
                            const newResult = eval(result.val());
                                  result.val(newResult);
                        }
                    }catch(err){
                            result.val('Inavalid Number?');
                    }
                } else {
                    if (event.target.value === "DEL") {
                        const lastNewResult = result.val().slice(0, -1);
                                result.val(lastNewResult);  
                    } else {
                              result.val(result.val() + event.target.value);
                    }
                }
            }
        }
  } else {
        if (event.target.value === "C") {
            result.val("");
        } else if (event.target.value === "DEL") {
            const lastNewResult = result.val().slice(0, -1);
                  result.val(lastNewResult);
        } else if (event.target.value === '='){
                if(event.target.value === 'Inavalid Number?'){
                    const newResult = eval(result.val());
                      if(event.target.value !== "="){
                        result.val(newResult);
                      }else{
                        result.val('');
                      }
                }
        }
  }
});
