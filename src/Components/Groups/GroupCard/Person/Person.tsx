import { Icon } from "@iconify/react/dist/iconify.js"
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material"

function WinIcon({ win }: { win: number }) {
    const colors: { [key: string]: string } = {
        '1': 'green',
        '-1': 'red',
        '0': '#ddd'
    }
    const background: string = colors[win.toString()]
    const icons: { [key: string]: string } = {
        '1': "fa-solid:check",
        '0': "octicon:dot-24",
        '-1': "ep:close-bold",
    }
    return (
        <IconButton
            disableFocusRipple
            disableTouchRipple
            disableRipple
            sx={{
                background,
                color: 'white',
                cursor: 'default'
            }}
            size="small">
            <Icon icon={icons[win.toString()]} color={win == 0 ? colors[win.toString()] : 'white'} />
        </IconButton>
    )
}
function Person({ person }: { person: any }) {
    return (
        <Stack sx={{ mb: 3 }}>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                    <Box sx={{ pr: 2 }}>
                        <Avatar
                            src={person.img}
                            alt={person.name}
                            sx={{
                                width: 50, height: 50,
                                // border: '2px solid #6baae5', 
                                bgcolor: stringToColour(person.name)
                            }}>
                            {person.name.slice(0, 1).toUpperCase()}
                        </Avatar>
                    </Box>
                    <Typography variant="h6" fontSize={18} fontWeight="600">{person.name}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{ width: 10, mr: 3 }}>
                        <Typography variant="subtitle1" fontSize={21} fontWeight="600">
                            {person.games.filter((x: number) => x == 1).length}
                        </Typography>
                    </Box>
                    <Box sx={{ width: 10, mr: 2 }}>
                        <Typography variant="subtitle1" fontSize={21} fontWeight="600">
                            {person.games.filter((x: number) => x == -1).length}
                        </Typography>
                    </Box>
                    <Box sx={{ width: 110, ml: 1 }}>
                        <Stack direction="row" justifyContent="space-between">
                            {person.games.map((x: number, key: number) => <WinIcon win={x} key={key} />)}
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
            <Box sx={{ position: 'relative', background: 'white', width: '100%', height: '3px', mt: 2, mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ height: '12px', width: '3px', background: 'white', top: '-5px', position: 'absolute', borderRadius: '2px' }}></Box>
                <Box sx={{ height: '12px', width: '3px', background: 'white', top: '-5px', position: 'absolute', borderRadius: '2px', alignSelf: 'flex-end', right: '0' }}></Box>
            </Box>
        </Stack>

    )
}

const stringToColour = (str: string) => {
    let hash = 0;
    str.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 8) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0x58
        colour += value.toString(16).padStart(2, '0')
    }
    return colour
}
export default Person