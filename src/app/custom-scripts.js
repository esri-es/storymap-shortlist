define(["dojo/topic"], function(topic) {
	/*
	* Custom Javascript to be executed while the application is initializing goes here
	*/

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		/*
		* Custom Javascript to be executed when the application is ready goes here
		*/
	});

    const strip = function (html)
    {
       var tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    }

    topic.subscribe("story-tab-changed", function(index){
        console.log(`Index = ${index}`);
        var data = {
             hitType: 'event',
             eventCategory: 'section',
             eventAction: 'story-tab-navigation',
             eventLabel: strip(app.data.getStory()[index].title).trim()
        };
        console.log('Sending data to GA: ', data);
        ga('send', data);
	});
});
