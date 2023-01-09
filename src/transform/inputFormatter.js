const getFormattedAddingInputData = (userId, units, time, startDay, perUse, duration, name) => ({
        userId, units, time, startDay, perUse: +perUse, duration: +duration, name
    })

export default getFormattedAddingInputData;