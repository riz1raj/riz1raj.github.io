function app() {
    return {
        time: 0,
        date: 0,
        week: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAT', 'SATURDAY'],
        startClock() { setInterval(() => {
            this.updateClock();
        }, 1000) },
        updateClock() {
            var newDate = new Date();
            this.time = this.padNum(newDate.getHours(), 2) + ':' + this.padNum(newDate.getMinutes(), 2) + ':' + this.padNum(newDate.getSeconds(), 2);
            this.date = this.padNum(newDate.getFullYear(), 4) + '-' + this.padNum(newDate.getMonth() + 1, 2) + '-' + this.padNum(newDate.getDate(), 2) + ' | ' + this.week[newDate.getDay()];
        },
        padNum: function(num, digit) {
            var zero = '';
            for (var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    }
}