import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Rating,
    Typography,
  } from "@mui/material";
  
  import { blueGrey } from "@mui/material/colors";
  
  const MonaReview = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: blueGrey[500] }}
              aria-label=""
            >
              CL
            </Avatar>
          }
          title="全方位服务"
        />
        <CardContent>
          <Rating value={5} readOnly />
          <Typography variant="body2" color="text.secondary">
          集孕前体质调理、孕中护理、产前指导、新生儿护理、新生妈妈修复、月子餐、餐后体质恢复、妈妈课堂、婴儿游泳、0—3岁早教、孕产瑜伽、国际一线品牌母婴用品等为一体的大型多元化会所。
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default MonaReview;