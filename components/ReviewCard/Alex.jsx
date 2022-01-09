import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Rating,
    Typography,
  } from "@mui/material";
  import { red } from "@mui/material/colors";
  
  const AlexReview = () => {
    return (
      <Card sx={{ maxWidth: 545 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[700] }} aria-label="专业">
              OP
            </Avatar>
          }
          title="专业化服务"
        />
        <CardContent>
          <Rating value={5} readOnly />  
          <Typography variant="body2" color="text.secondary">
          先进的技术、服务支持及硬件设施 可使企业快速启动， 成 熟的经营方式及理念助力企业 ，并且 持续不断的产品开发与服务扶持功能，使得我们的服务以及产品始终先进国内市场
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default AlexReview;