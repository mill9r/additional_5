module.exports = function check(str, bracketsConfig) {

        while (str.length > 0) {
            prev_str = str;
            str = remove_braice_pair(str, bracketsConfig);

            if (str === prev_str) {
                return false
            }
        }

        return true

    }

function remove_braice_pair(input_string, conf) {
    conf.forEach(function (i) {
        repl = i.join('');
        input_string = input_string.replace(repl, '');
    });
    return input_string

}
