import styled from './index.module.css';

/**
 * Button wrapper component
 *
 * @param {React.ReactElement} children - Content of component
 * @return {JSX.Element} Rendered component
 */
export const ButtonWrapper = ({children}) => (
    <div className={styled.buttonWrapper}>{children}</div>
)

/**
 * Button component
 *
 * @param {React.ReactElement} children - Content of component
 * @param {Function} onClick - Callback function for onClick handler
 * @param {boolean} isActive - Flag is active button
 * @return {JSX.Element} Rendered component
 */
export const Button = ({children, onClick, isActive}) => (
    <button
        className={`${styled.button} ${isActive ? styled.active : ''}`}
        onClick={onClick}
    >
        {children}
    </button>
)