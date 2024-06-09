import { useState } from 'react';
import ChatBot from 'react-chatbotify';
import { Flow, Options } from 'react-chatbotify';

const MyBot = () => {
    const [isOpen, openWindow] = useState(false);

    const defaultTransitionTime: number = 1000;
    const noInputTransitionTime: number = 100;

    const defaultFlow: Flow = {
        start: {
            message:
                'Hello! I am Musty the Mustang, and I am here to assit you in navigating our website. Ask a question in the input field below or select one of our frequently asked questions.',
            transition: {
                duration: noInputTransitionTime,
                interruptable: false
            },
            path: 'prompt'
        },

        prompt: {
            options: ['Report an incident', 'Find a form', 'Talk to supervisor'],
            path: (params) => {
                switch (params.userInput) {
                    case 'Report an incident':
                        return 'reportIncident';
                        break;

                    case 'Find a form':
                        return 'findForm';
                        break;

                    case 'Talk to supervisor':
                        return 'supervisor';
                        break;

                    default:
                        return 'userGenQuestion';
                        break;
                }
            }
        },

        userGenQuestion: {
            message: 'Currently, I cannot answer user specified questions. Please select from the avaible questions below.',
            transition: {
                duration: defaultTransitionTime,
                interruptable: false
            },
            path: 'prompt'
        },
        reportIncident: {
            message:
                'Of course I can help. Call campus police at 805-756-2281 or 911 for emergencies. Call 805-756-5555 to speak to help desk. Visit https://afd.calpoly.edu/ehs/hazreport for additional information.',
            transition: {
                duration: defaultTransitionTime,
                interruptable: false
            },
            path: 'offerAdditionalAssistence'
        },
        findForm: {
            message: 'Of course I can help with that. Simply navigate to https://afd.calpoly.edu/ehs/forms to access available forms.',
            transition: {
                duration: defaultTransitionTime,
                interruptable: false
            },
            path: 'offerAdditionalAssistence'
        },
        supervisor: {
            message: 'Of course I can help with that. Simply navigate to https://afd.calpoly.edu/ehs/contacts to find all the supervisors numbers.',
            transition: {
                duration: defaultTransitionTime,
                interruptable: false
            },
            path: 'offerAdditionalAssistence'
        },

        offerAdditionalAssistence: {
            message: 'I hope that was helpful. Can I assist you with anything else?',
            options: ['Yes', 'No'],
            path: (params) => {
                switch (params.userInput.toLowerCase()) {
                    case 'yes':
                        return 'prompt';
                        break;

                    case 'no':
                        return 'end';
                        break;

                    default:
                        return 'userGenQuestion';
                        break;
                }
            }
        },

        end: {
            message: 'I hope I was helpful. I will be here to assist with any further questions.'
        }
    };

    const options: Options = {
        theme: {
            embedded: false,
            flowStartTrigger: 'ON_LOAD',
            primaryColor: '#33725A',
            secondaryColor: '#123456'
        },
        isOpen: isOpen,
        audio: {
            disabled: false,
            defaultToggledOn: false,
            language: 'en-US'
        },
        chatHistory: {
            storageKey: 'conversations_summary'
        },
        chatInput: {
            blockSpam: true
        },
        header: {
            showAvatar: true,
            title: 'Musty the Mustang Bot',
            avatar: '../assets/react.svg'
        },
        notification: {
            disabled: true
        },
        tooltip: {
            mode: 'START',
            text: "Hi! I'm Musty the Mustang, and I am here to help. Click me for assistence."
        }
    };

    return <ChatBot options={options} flow={defaultFlow} />;
};

export default MyBot;
