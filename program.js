process.stdin.setEncoding("utf-8");
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case 'info':
                console.log('Node version: ' + process.versions.node);
                process.stdout.write('Language version: ' + process.env.LANG + '\n');
                break;
            default:
                process.stdout.write('Wrong instruction!\n');
        }
    }
});