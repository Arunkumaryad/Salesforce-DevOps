({
    handleMessage: function(component, message) {
        console.log('LMS Message Received >>>>>', message);

        if (message) {
            var lmsData = message.getParam('lmsData');

            console.log('LMS Data >>>>>', lmsData);

            if (lmsData) {
                component.set(
                    'v.messageReceived',
                    lmsData.value
                );
            }
        }
    },

    inputHandler: function(component, event) {
        console.log(
            'Input Handler Called >>>>>>>>>',
            event.target.value
        );

        component.set(
            'v.messageValue',
            event.target.value
        );
    },

    publishMessage: function(component) {
        var msg = component.get('v.messageValue');

        var message = {
            lmsData: {
                value: msg
            }
        };

        console.log('Publishing Message >>>>>', message);

        component
            .find('SampleMessageChannel')
            .publish(message);
    }
})