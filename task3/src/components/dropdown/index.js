import 'react-dropdown/style.css';
import DropdownMain from 'react-dropdown';

import styles from './index.module.css'

/**
 * Dropdown component with styles
 *
 * @param {string[]} options - Dropdown options
 * @param {Function} onChange - Callback function
 * @param {string} value - Default value
 * @param {string} placeholder - Placeholder
 * @return {JSX.Element} Rendered component
 */
const Dropdown = ({
    options= [],
    onChange = () => {},
    value= '',
    placeholder= ''
}) => (
    <DropdownMain
        className={styles.wrapper}
        controlClassName={styles.control}
        menuClassName={styles.menu}
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
    />
);

export default Dropdown;