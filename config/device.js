export const size = {
    xl: "1200px",
    md: "992px",
    sm: "767px",
    xs:"572px"
}
export const media={
xl:`@media (min-width:${size.xl})`,
md:`@media (min-width:${size.md})`,
sm:`@media (max-width:${size.sm})`,
xs:`@media (max-width:${size.xs})`
}