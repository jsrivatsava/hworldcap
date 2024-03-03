module.exports = (capsrv) => {
    capsrv.on('eventinfo', (req) => {
        const { batch } = req.data;
        console.log(batch);
        req.reply('SUCCESS');
    });
}