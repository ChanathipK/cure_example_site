# Example 6 Explanation

`domain/example-6`

## Important Concepts

- Total Zoom: Total Zoom is calculated by multiplying displa scaling and browser zoom.

- Class names: `max-w-screen-xl` (line 19), `mx-auto` (line 19)

    - `max-w-screen-xl` is used to make element's max width 1280px. 1280px is a magic number because 1280 * 1.5 = 1920. The screen wouldn't break if the screen is at 150% total zoom.

    - `mx-auto` is used to center an element (element inside a normal layout, not flexbox or grid)

- Screen Size

- Viewport Size