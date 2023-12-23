import '@testing-library/jest-dom';

import RatingSelect, { options } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('RatingSelect', () => {
    describe('component', () => {
        it('should render', () => {
            render(<RatingSelect defaultValue="" />);

            // const ratingSelect = screen.getByRole('combobox');
            // fireEvent.click(ratingSelect);

            // // Verify that options are rendered
            // options.forEach(({ label }) => {
            //     expect(screen.getByText(label)).toBeInTheDocument();
            // });
        });

        // it('should change the border color to match the selected value', () => {
        //     const testId = '123';
        //     render(<RatingSelect data-testid={testId} defaultValue="" />);

        //     // console.log(screen);

        //     const ratingSelect = screen.getByTestId(testId);
        //     fireEvent.click(ratingSelect);

        //     console.log({ ratingSelect });

        //     // fireEvent.select(ratingSelect, { target: { value: 'M' } });
        // });

        // it('calls onChange if change event fired', () => {
        //     const mockCallback = jest.fn();
        //     const { getByTestId } = render(
        //         <div>
        //             <Select
        //                 native={true}
        //                 onChange={mockCallback}
        //                 data-testid="my-wrapper"
        //                 defaultValue="1"
        //             >
        //                 <option value="1">Option 1</option>
        //                 <option value="2">Option 2</option>
        //                 <option value="3">Option 3</option>
        //             </Select>
        //         </div>
        //     );
        //     const wrapperNode = getByTestId('my-wrapper');
        //     // console.log(wrapperNode);
        //     // Dig deep to find the actual <select>
        //     const selectNode = wrapperNode.childNodes[0].childNodes[0];
        //     fireEvent.change(selectNode, { target: { value: '3' } });
        //     expect(mockCallback.mock.calls).toHaveLength(1);
        // });
    });
});
