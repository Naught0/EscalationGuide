'use strict';

function LightModeButton(props) {
    return (
        <button className="button is-small" onClick={props.onClick}>
            <span className="icon">
                <i className="fa fa-fw fa-sun-o"></i>
            </span>
            <span>Light mode</span>
        </button>
    )
}

function DarkModeButton(props) {
    return (
        <button className="button is-small" onClick={props.onClick}>
            <span className="icon">
                <i className="fa fa-fw fa-moon-o"></i>
            </span>
            <span>Dark mode</span>
        </button>
    )
}

class ThemeControl extends React.Component {
    constructor(props) {
        let prevTheme = localStorage.getItem('theme');
        let theme = prevTheme ? prevTheme : 'light';
        super(props);
        this.state = { theme: theme };
        this.darkCss = "css/darkly.min.css";
        this.lightCss = "css/flatly.min.css";
    }

    swapStyleSheet(sheet) {
        document.getElementById("cssTheme").setAttribute("href", sheet);
    }

    toDarkMode() {
        this.setState({ theme: 'dark' });
        localStorage.setItem('theme', 'dark');
        $('.is-light, .is-dark').toggleClass('is-light is-dark');
        this.swapStyleSheet(this.darkCss)
    }

    toLightMode() {
        this.setState({ theme: 'light' });
        localStorage.setItem('theme', 'light');
        $('.is-light, .is-dark').toggleClass('is-light is-dark');
        this.swapStyleSheet(this.lightCss);
    }

    componentDidMount() {
        if (this.state.theme == 'dark') {
            this.toDarkMode();
        }
    }

    render() {
        const theme = this.state.theme;
        let button;
        if (theme == 'light') {
            button = <LightModeButton onClick={() => this.toDarkMode()} />
        }
        else {
            button = <DarkModeButton onClick={() => this.toLightMode()} />
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}


ReactDOM.render(<ThemeControl />,
    document.getElementById('themeToggleBtnContainer')
);