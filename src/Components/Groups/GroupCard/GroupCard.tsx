import { Box, Stack, Typography } from "@mui/material"
import Person from "./Person/Person"

function GroupCard({ group }: { group: any }) {
    return (
        <Box sx={{}}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4">Group {group.id}</Typography>
            </Box>

            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{ width: 10, mr: 3 }}>
                        <Typography variant="subtitle1" fontSize={18} fontWeight="600">W</Typography>
                    </Box>
                    <Box sx={{ width: 10, mr: 2 }}>
                        <Typography variant="subtitle1" fontSize={18} fontWeight="600">L</Typography>
                    </Box>
                    <Box sx={{ width: 110, ml: 1 }}>
                        <Typography variant="subtitle1" fontWeight="600">Last 3 Games</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Stack>
                {group.participants.map((person:any,key:number) => <Person person={person} key={key}/>)}
            </Stack>
        </Box>
    )
}

export default GroupCard