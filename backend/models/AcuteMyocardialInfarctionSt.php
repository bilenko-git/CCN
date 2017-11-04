<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "acute_myocardial_infarction_st".
 *
 * @property integer $id
 * @property string $arrival_date
 * @property string $arrival_time
 * @property string $first_name
 * @property string $last_name
 * @property string $patronymic
 * @property string $birthday_date
 * @property string $gender
 * @property string $delivered_smp
 * @property string $delivered_yourself
 * @property integer $killip_type
 * @property string $effect_of_thrombolysis
 * @property string $thrombolysis
 * @property string $ecg
 * @property string $time_intervals
 * @property string $continuing_pain
 * @property string $increase_segment_st
 * @property string $thrombaspiration
 * @property integer $blood_timi_before
 * @property integer $blood_timi_after
 * @property integer $stenosis_diameter_ica_before_chkv
 * @property integer $stenosis_diameter_ica_after_chkv
 * @property string $additionally
 * @property string $type_interventions
 * @property string $lka
 * @property string $pka
 * @property string $lvg
 * @property string $operator
 * @property string $date_time_death
 * @property string $parent_id
 */
class AcuteMyocardialInfarctionSt extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'acute_myocardial_infarction_st';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
      return [
        [['date_and_time_of_arrival', 'first_name', 'last_name', 'patronymic', 'birthday_date', 'killip_type', 'ecg', 'stenosis_diameter_ica_before_chkv', 'stenosis_diameter_ica_after_chkv'], 'required'],
        [['id', 'killip_type', 'blood_timi_before', 'blood_timi_after', 'stenosis_diameter_ica_before_chkv', 'stenosis_diameter_ica_after_chkv', 'parent_id'], 'integer'],
        [['date_and_time_of_arrival', 'birthday_date', 'date_and_time_of_death'], 'safe'],
        [['gender', 'delivered', 'effect_of_thrombolysis', 'thrombolysis', 'ecg', 'time_intervals', 'continuing_pain', 'increase_segment_st', 'thrombaspiration', 'additionally', 'type_interventions', 'lka', 'pka', 'lvg', 'fv', 'cause_of_death', 'operator', 'parent_ids'], 'string'],
        [['first_name', 'last_name', 'patronymic'], 'string', 'max' => 100],
      ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'arrival_date' => 'Arrival Date',
            'arrival_time' => 'Arrival Time',
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'patronymic' => 'Patronymic',
            'birthday_date' => 'Birthday Date',
            'gender' => 'Gender',
            'delivered_smp' => 'Delivered Smp',
            'delivered_yourself' => 'Delivered Yourself',
            'killip_type' => 'Killip Type',
            'effect_of_thrombolysis' => 'Effect Of Thrombolysis',
            'thrombolysis' => 'Thrombolysis',
            'ecg' => 'Ecg',
            'time_intervals' => 'Time Intervals',
            'continuing_pain' => 'Continuing Pain',
            'increase_segment_st' => 'Increase Segment St',
            'thrombaspiration' => 'Thrombaspiration',
            'blood_timi_before' => 'Blood Timi Before',
            'blood_timi_after' => 'Blood Timi After',
            'stenosis_diameter_ica_before_chkv' => 'Stenosis Diameter Ica Before Chkv',
            'stenosis_diameter_ica_after_chkv' => 'Stenosis Diameter Ica After Chkv',
            'additionally' => 'Additionally',
            'type_interventions' => 'Type Interventions',
            'lka' => 'Lka',
            'pka' => 'Pka',
            'lvg' => 'Lvg',
            'operator' => 'Operator',
            'date_time_death' => 'Date Time Death',
        ];
    }
}
