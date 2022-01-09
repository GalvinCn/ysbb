import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Rating,
    Typography,
  } from "@mui/material";
  import { orange } from "@mui/material/colors";
  
  const ReviewShanen = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: orange[500] }}
              aria-label=" "
            >
              CR
            </Avatar>
          }
          title="规范化服务"
        />
        <CardContent>
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
          佑圣宝贝拥有健全完善的服务管理体系，签证部、咨询部、客服部、售后部、市场推广部等部门齐备。。
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default ReviewShanen;