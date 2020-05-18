$(function () {
    var codeMirror = CodeMirror(function (el) {
        let editor = document.getElementById('logEditor');
        editor.parentNode.replaceChild(el, editor);
    }, { lineNumbers: true, lineWrapping: true, readOnly: 'nocursor', theme: 'material', viewportMargin: Infinity, value: '\n\n\n\n\n\n\n\n\n' })

    function getErrorLines(text) {
        let lines = text.split('\n');
        let results = []
        for (let x of lines) {
            if (x.includes('LogMeIn AV') && x.includes('Installer exit code:')) {
                results.push(x);
            }
        }

        return results ? results.join('\n').trim() : null
    }

    function getExplanation(errorCode) {
        let errors = {
            "1327": "The installer was run under safe mode.",
            "1314": "The installer was run under an user with insufficient privileges.",
            "1633": "Installer.exe is not compliant with the operating system architecture",
            "1003": "The product configuration JSON could not be run at the end of the installation",
            "1168": "Installer cannot load one of its configuration files (install_config.xml, install_x86.xml/install_x64.xml) or cannot find additional.dll",
            "3017": "A restart action is pending as a result of another maintenance (install, repair, modify, uninstall) operation that required restart in order to finish correctly. The error code indicates that the current maintenance operation cannot continue until restart is performed. Another case when this code is returned is when the repair or uninstall fails and will try again after a reboot. ",
            "1151": "Unsupported operating system. The list of supported operated systems can be found at system requirements",
            "1613": "Wrong Windows Installer version installed on the machine.",
            "112": "There isn't enough space on the disk for the product to be installed",
            "183": "\"Installer.exe is already running. Or, in case installer runs silent without \"/modify\", \"/repair\" or \"/remove\" command line parameter specified on a machine where the product has already been installed. This code is also returned when an older version of the product is run over a newer version.\"",
            "31": "Uninstalling a competitor product failed.",
            "87": "The installer was started with an invalid command line or no feature was selected to be installed. Valid installer command line arguments are defined in  Installer parameters   section. //Did not download the files for BEST",
            "1027": "The installer was unable to remove previously existing LogMeIn AV or BitDefender services. Check services.msc for any previously existing LogMeIn AV or BitDefender EP entries and delete them from an admin command prompt using SC DELETE [SERVICE NAME]",
            "5": "Generic failure. Try removing temp files & leftover services from cmd or the registry. You may need to boot into safemode to remove some leftover services."
        }

        if (! errors.hasOwnProperty(errorCode)) {
            return 'Unknown&mdash;Reach out to the #tech room for troubleshooting';
        }
        else {
            return errors[errorCode];
        }
    }

    function getLastErrorCode(resultArr) {
        return resultArr.split('Installer exit code: ').pop()
    }

    let i = document.getElementById('logFileInput');

    i.onchange = async (e) => {
        if (i.files[0].name)
        document.getElementById('logFileName').innerHTML = `Viewing  <code>${i.files[0].name}</code>`;

        let text = await i.files[0].text();
        let errArr = getErrorLines(text);
        let lastErrorCode = getLastErrorCode(errArr);
        let errorExplanation = getExplanation(lastErrorCode);

        codeMirror.setValue(errArr ? errArr : '\n\n\n\n\n\n\n\n\n');
        document.getElementById('logFileExitCode').innerHTML = lastErrorCode ? lastErrorCode : '???';
        document.getElementById('logFileReason').innerHTML = errorExplanation;
    }
})