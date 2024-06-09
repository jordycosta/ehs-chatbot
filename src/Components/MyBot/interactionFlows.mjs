export const defaultFlow = {
    start: {
        message: 'What is your age?',
        path: 'end'
    },
    end: {
        message: (params) => `I see you are ${params.userInput}!`,
        chatDisabled: true
    }
};
