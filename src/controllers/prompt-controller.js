const inputPrompt = require('../model/input-model');
const openai = require('../config/openai');

module.exports = {
    async sendText(req, res){
        const openAi = openai.configuration();
        const inputModel = new inputPrompt(req.body);

        try {
            const response = await openAi.createCompletion(openai.textCompletion(inputModel));
            
            return res.status(200).json(
            {
                sucess:true,
                data: response.data.choices[0].text
            });
        }
        catch (error) {
            return res.status(400).json(
            {
                sucess:false,
                error: error.res ?
                error.response.data: 'tem erro no servidor'
            });
        }
    },

    async sendImag(req, res){
        const openAi = openai.configuration();
        const inputModel = new inputPrompt(req.body);

        try {
            const response = await openAi.createImage(openai.imgCompletion(inputModel));
            
            return res.status(200).json(
            {
                sucess:true,
                data: response.data.data[0].url
            });  
        } catch (error) {
            return res.status(400).json(
            {
                sucess:false,
                error: error.res ?
                error.response.data: 'tem erro no servidor'
            });
        }
    }
}