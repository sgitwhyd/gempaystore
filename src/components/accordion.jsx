import { Accordion } from "react-bootstrap";
import "../styles/accordion.scss";

export const AccordionComponent = ({
	accordionTitle,
	eventKey,
	children,
	accFooter,
}) => {
	return (
		<>
			<Accordion.Item eventKey={eventKey}>
				<Accordion.Header>{accordionTitle}</Accordion.Header>
				{children}
			</Accordion.Item>
			{accFooter}
		</>
	);
};

export const AccordionContent = ({ children }) => {
	return (
		<Accordion.Body>
			<div className='accordion-content'>{children}</div>
		</Accordion.Body>
	);
};

export const AccordionFooter = ({ children }) => {
	return <div className='accordion-footer'>{children}</div>;
};
