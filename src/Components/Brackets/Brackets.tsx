import { Match, SVGViewer, SingleEliminationBracket, createTheme } from "@g-loot/react-tournament-brackets";
import { Box, Typography } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";

const theme = createTheme({
    svgBackground: '#AAA',
});
export const SingleElimination = ({ matches }: any) => {
    const { width, height }: any = useWindowSize();
    const finalWidth = Math.max(width - 50, 500);
    const finalHeight = Math.max(height - 100, 500);
    return (
        <SingleEliminationBracket
            matches={matches}
            matchComponent={Match}
            theme={theme}

            svgWrapper={({ children, ...props }) => {
                return (
                    <SVGViewer width={finalWidth + 100} height={finalHeight + 100} {...props}>
                        {children}
                    </SVGViewer>
                )
            }}
        />
    );
}
function Brackets() {
    return (
        <Box sx={{}}>
            <Typography variant="h5">Brackets</Typography>
            <SingleElimination matches={window.data.brackets} />
        </Box>
    )
}

export default Brackets