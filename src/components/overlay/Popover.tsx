import { autoUpdate, offset as offsetMiddleware, Placement, shift as shiftMiddleware, useFloating } from '@floating-ui/react-dom';
import { Portal } from '@headlessui/react';
import React, { ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';

interface Props {
	children: [ReactNode, ReactNode]
	trigger: 'hover' | 'click'
	forceUpdate?: boolean
	isDisabled?: boolean
	placement?: Placement
	offset?: number
}

export default function Popover({ children: [triggerNode, contentNode], trigger, forceUpdate, isDisabled = false, placement = 'top', offset = 4 }: Props) {

	const { x, y, reference, floating, strategy } = useFloating({
		placement,
		middleware: [offsetMiddleware(offset), shiftMiddleware()],
		whileElementsMounted: (...opts) => autoUpdate(...opts, { animationFrame: forceUpdate }),
	});

	const [triggered, setTriggered] = useState(false);

	const handleMouseEnter = useCallback(() => {
		setTriggered(true);
	}, [setTriggered]);

	const handleMouseLeave = useCallback(() => {
		setTriggered(false);
	}, [setTriggered]);

	const active = triggered && !isDisabled;

	return (
		<>
			<span
				className="contents"
				ref={reference}
				{...(trigger === 'hover' ? {
					onMouseEnter: handleMouseEnter,
					onMouseLeave: handleMouseLeave
				} : {
					onClick: () => setTriggered(h => !h)
				})}
			>
				{triggerNode}
			</span>
			<Portal>
				<div
					className="transition-all"
					ref={floating}
					style={{
						position: strategy,
						top: y ?? 0,
						left: x ?? 0,
						visibility: active ? 'visible' : 'hidden',
						opacity: active ? 1 : 0,
						transform: active ? 'none' : 'scale(0.75)',
						transformOrigin: placement.replace('start', 'left').replace('end', 'right').replaceAll('-', ' ')
					}}
				>
					{contentNode}
				</div>
			</Portal>
		</>
	);
}