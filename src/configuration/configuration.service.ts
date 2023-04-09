import { Injectable } from '@nestjs/common';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configuration } from './entities/configuration.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConfigurationService {
  constructor(
    @InjectModel(Configuration.name)
    private readonly configurationModel: Model<Configuration>,
  ) {}

  create(createConfigurationDto: CreateConfigurationDto) {
    const createConfiguration = new this.configurationModel(
      createConfigurationDto,
    );
    return createConfiguration.save();
  }

  findAll() {
    return this.configurationModel.find();
  }

  findOne(id: string) {
    return this.configurationModel.findOne({ id });
  }

  update(id: string, updateConfigurationDto: UpdateConfigurationDto) {
    return this.configurationModel
      .findOneAndUpdate({ id }, updateConfigurationDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.configurationModel.findOneAndDelete({ id }).exec();
  }
}
