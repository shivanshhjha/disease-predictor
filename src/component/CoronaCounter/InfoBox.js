import React from 'react'
import "./InfoBox.css"
import {Card, CardContent, Typography} from "@material-ui/core"

function InfoBox({title, cases, total, ...props }) {
    return (
        <Card className="infoBox" onClick={props.onClick}>
            
            <CardContent>
                {/* Title */}
                <Typography color="textSecondary" className="infoBox_title">{title}</Typography>

                {/* Number of cases */}
                <h2 className="infoBox_cases">{cases}</h2>

                {/* total */}
                <Typography  className="infoBox_total" color="textSecondary">
                    {total} total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
