import Configuration from './jsx-uses-react.d'

const configuration:Configuration = {
	ruleId: `react/jsx-uses-react`,
	providerId: `eslint-plugin-react`,
	// TODO: activate/deactivate depending new JSX transform? https://reactjs.org/blog/2020/10/20/react-v17.html#new-jsx-transform
	ignore: true,
}

export default configuration
