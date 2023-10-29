import { Grid } from "@mui/material"
import GroupCard from "./GroupCard/GroupCard"
declare global {
    interface Window {
        data: any;
    }
}
function Groups() {
    return (
        <Grid container spacing={2}>
            {window.data.groups.map((group: any, key: number) => (
                <Grid item xs={12} md={6} key={key} sx={{ borderRight: { md: key % 2 == 0 ? '1px solid rgba(200,200,200,0.2)' : '' }, pr: { md: 2 } }}>
                    <GroupCard group={group} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Groups