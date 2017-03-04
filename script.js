function toEst(dtstr){
	dtstr = dtstr.replace(/\D/g, " ");
	var dtcomps = dtstr.split(" ");
	dtcomps[1]--;
	var convdt = new Date(Date.UTC(dtcomps[0],dtcomps[1],dtcomps[2],dtcomps[3],dtcomps[4],dtcomps[5]));

	return convdt;
}

$.getJSON("data.json", function(data) {
    for(var ind in data.items) {
    	var time = toEst(data.items[ind].played_at);
    	console.log(time);
    }
});